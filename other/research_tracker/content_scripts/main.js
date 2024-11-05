;((async ()=>{
    console.debug(`[content_scripts/main.js] loading`)
        // console.debug(`allKeys(browser) is:`,allKeys(browser))
        // console.debug(`allKeys(browser.tabs) is:`,allKeys(browser.tabs))
        // console.debug(`allKeys(browser.runtime) is:`,allKeys(browser.runtime))
        // console.debug(`browser.storage is:`,browser.storage)
    // 
    // helpers
    // 
        const allKeys = function(obj) {
            // from: https://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object/70629468?noredirect=1#comment126513832_70629468
            const listOfKeys = []
            // super-primitives have no attributes
            if (obj == null) {
                return []
            }
            // normal primitives still have listOfKeys, just skip the first iteration
            if (!(obj instanceof Object)) {
                obj = Object.getPrototypeOf(obj)
            }
            while (obj) {
                listOfKeys.push(Reflect.ownKeys(obj))
                obj = Object.getPrototypeOf(obj)
            }
            return [...new Set(listOfKeys.flat(1))]
        }

    // 
    // common data
    // 
        let allData = await browser.storage.local.get()||{}
        // {
        //     articles: [
        // 
        //     ],
        //     searchQueries: {
        //         // [each]: {
        //         //     time: new Date(),
        //         //     results: {
        //         //         
        //         //     }
        //         // }
        //     },
        // }
        let initStorage =()=>{
            allData.activeSession = allData.activeSession||{} 
            let needsUpdate = false
            if (!(allData.activeSession.articles instanceof Array)) {
                allData.activeSession.articles = []
                needsUpdate = true
            }
            if (!(allData.activeSession.searchQueries instanceof Object)) {
                allData.activeSession.searchQueries = {}
                needsUpdate = true
            }
            if (needsUpdate) {
                browser.storage.local.set(allData)
            }
        }
        initStorage()
        console.debug(`1: storage is:`, allData.activeSession)

    // 
    // main events
    // 
        // browser.runtime.onMessage.addListener((message) => {
        //     console.log(`[content_scripts/main.js] got message: ${message}`, message)
        // })
        browser.storage.local.onChanged.addListener(({activeSession})=>{
            if (activeSession) {
                console.debug(`activeSession is:`,activeSession.newValue)
                allData.activeSession = activeSession.newValue
                initStorage()
            }
        })
        browser.storage.local.set(allData)
        
        // 
        // if on google scholar
        // 
        if (window.location.href.startsWith(`https://scholar.google.com/`)) {
            document.addEventListener("click", ({target}) => {
                setTimeout(()=>{
                    console.debug(`target is:`,target)
                    if (target.tagName == "A") {
                        console.debug(`target.href is:`,target.href)
                        console.debug(`storage is:`,allData.activeSession)
                        for (let eachArticle of allData.activeSession.articles) {
                            if (eachArticle.link == target.href || eachArticle.pdfLink == target.href) {
                                console.log(`setting it`)
                                console.log(`setting lastClickedArticleTitle`)
                                allData.lastClickedArticleTitle = eachArticle.title
                                browser.storage.local.set(allData)
                            }
                        }
                    }
                })
            })
            let url = new URL(window.location.href)
            let query = url.searchParams.get("q")
            let firstSeenTime = new Date().toUTCString()
            // 
            // if query
            // 
            if (query) {
                // 
                // pull article info
                // 
                let articles = []
                try {
                    let links = [...document.querySelectorAll("h3 a")]
                    for (let each of links) {
                        const title = each.innerText
                        const link = each.href
                        articles.push({
                            title,
                            possibleYear: null,
                            notesConsideredRelevent: null,
                            notesCustomKeywords: [],
                            notesComment: null,
                            notesWasRelatedTo: [],
                            notesIsCitedByTitles: [],
                            notesCites: [],
                            firstDiscoveryQuery: query,
                            firstSeenTime,
                            authorNames: null,
                            pdfLink: null,
                            link,
                            citationId: null,
                            multiArticleId: null,
                            citedByLink: null,
                            publisherInfo: null,
                        })
                    }
                    if (links.length > 0) {
                        // try to get main list
                        let parent = links[0].parentElement
                        while (parent && parent != document.body) {
                            // found parent as soon as it captures all children
                            if ([...parent.querySelectorAll("h3 a")].length == links.length) {
                                break
                            }
                            parent = parent.parentElement
                        }
                        const articlesElements = [...parent.children]
                        for (let eachArticleElement of articlesElements) {
                            let title
                            let articleObject
                            try {
                                title = eachArticleElement.querySelector("h3 a")?.innerText
                                articleObject = articles.filter(each=>each.title==title)[0]
                            } catch (error) {
                                console.warn(`    error getting article title for a child element`, error)
                            }
                            // ignore unknown thing
                            if (!articleObject) {
                                continue
                            }
                            
                            let articleLinks = [...eachArticleElement.querySelectorAll("a")]
                            for (let eachLinkElement of articleLinks) {
                                // 
                                // citationId
                                // 
                                if (eachLinkElement.innerText.startsWith("[PDF]") && eachLinkElement.innerHTML.startsWith("<span")) {
                                    articleObject.pdfLink = eachLinkElement.href
                                }

                                // 
                                // citationId
                                // 
                                if (eachLinkElement.innerText.startsWith("Cited by")) {
                                    articleObject.citedByLink = eachLinkElement.href
                                    try {
                                        let url = new URL(eachLinkElement.href)
                                        let citationId
                                        if (citationId = url.searchParams.get("cites")) {
                                            articleObject.citationId = citationId
                                        }
                                    } catch (error) {
                                        console.warn(error)
                                    }
                                }
                                // 
                                // multiArticleId
                                // 
                                if (eachLinkElement.innerText.match(/\bAll \d+ versions\b/)) {
                                    try {
                                        let url = new URL(eachLinkElement.href)
                                        let multiArticleId
                                        if (multiArticleId = url.searchParams.get("cluster")) {
                                            articleObject.multiArticleId = multiArticleId
                                        }
                                    } catch (error) {
                                        console.warn(error)
                                    }
                                }
                            }
                            // 
                            // year, authors, & publisherInfo
                            // 
                            try {
                                let titleElement = eachArticleElement.querySelector("h3")
                                if (titleElement) {
                                    let probablyAuthorsElement = titleElement.nextElementSibling
                                    if (probablyAuthorsElement && probablyAuthorsElement.innerText.match(/.+-.+-/)) {
                                        // let probablyAuthorLinks = [...probablyAuthorsElement.querySelectorAll("a")]
                                        let pieces = probablyAuthorsElement.innerText.split("-")
                                        let source = pieces.at(-1).trim()
                                        let publishInstanceInfo = pieces.at(-2)||""
                                        let authorInfoString = pieces.slice(0,-2).join("-") // join is just to be defensive, should be 1 item
                                        articleObject.authorNames = authorInfoString.split(",").map(each=>each.trim())
                                        let year
                                        // yep sadly this code will break in the year 2100
                                        if (year = publishInstanceInfo.match(/((?:20|19)(?:\d\d))/)) {
                                            articleObject.possibleYear = year
                                        }
                                        if (publishInstanceInfo) {
                                            articleObject.publisherInfo = publishInstanceInfo
                                        }
                                    }
                                }
                            } catch (error) {
                                console.warn(`issue getting year & author`, error)
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error while trying to extract links from search ${error}`)
                }
                let newArticlesFound = false
                const existingArticleTitles = new Set(allData.activeSession.articles.map(each=>each.title))
                let newArticles = []
                for (let eachArticleObject of articles) {
                    if (existingArticleTitles.has(eachArticleObject.title)) {
                        continue
                    }
                    newArticlesFound = true
                    newArticles.push(eachArticleObject)
                    allData.activeSession.articles.push(eachArticleObject)
                }

                // 
                // inform background/popup
                // 
                let newSearchQuery = false
                if (!allData.activeSession.searchQueries[query]) {
                    newSearchQuery = true
                    allData.activeSession.searchQueries[query] = {
                        firstTime: new Date().toUTCString(),
                        articleTitles: articles.map(each=>each.title),
                    }
                }
                if (newSearchQuery || newArticlesFound) {
                    console.debug(`allData.activeSession is:`,{...allData.activeSession})
                    console.debug(`setting activeSession`,allData.activeSession)
                    browser.storage.local.set(allData)
                }
            }
        }
    // 
})())