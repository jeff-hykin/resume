import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.72/main/file_system.js"
import { default as MiniSearch } from "https://esm.sh/minisearch@7.1.0"
import { version } from "https://deno.land/x/good@1.9.1.1/flattened/version.js"


const dataDir = "./data"
const appDataDir = `${dataDir}/apps`
const maxNameLength = 254
const maxDescriptionLength = 8192

// 
// search engine setup
// 
    // on start register all apps
    let documents = {}
    await Promise.all(
        (await FileSystem.listFilePathsIn(appDataDir)).map(eachAppPath=>{
            const versions = (await FileSystem.listFilePathsIn(`${eachAppPath}/versions`)).filter(each=>!each.startsWith("."))
            if (versions.length == 0) {
                return
            }
            const latestVersion = versions.sort((a,b)=>version(b).compare(version(a)))[0]
            const packageInfo = JSON.parse(await FileSystem.read(`${eachAppPath}/versions/${latestVersion}`))
            documents[packageInfo.appName] = packageInfo
        })
    )
    const searchEngine = {
        miniSearch: new MiniSearch({
            fields: ['appName', 'description', 'keywordsString', ], // fields to index for full-text search
            storeFields: ['appName', 'description', 'version', 'keywords', 'publishDate' ], // fields to return with search results
            searchOptions: {
                boost: { appName: 3, keywordsString: 1, },
                fuzzy: 0.2
            },
        }),
        async add(packageInfo) {
            const previousDocument = documents[packageInfo.appName]
            if (previousDocument) {
                this.miniSearch.remove(previousDocument)
            }
            documents[packageInfo.appName] = packageInfo
            this.miniSearch.add(packageInfo)
        },
        async search(query) {
            return this.miniSearch.search(query)
        },
        async autoSuggest(query) {
            return this.miniSearch.autoSuggest(query)
        },
    }


// 
// 
// endpoints
// 
// 
    // TODO: add a lot of other fields to the packageInfo
        // issueUrl
        // zipHash
        // signatures
        // icon
        // banner
    const isValidAppName = appName=>{
        if (typeof appName !== "string") {
            throw Error(`appName is required, and it must be a string`)
        } else if (!appName.match(/^[a-z][a-z\-0-9]+$/g) && appName.length <= maxNameLength) {
            throw Error(`appName must be alphanumeric with dashes, start with a letter, be lowercase, more than one character, and less than 255 characters`)
        }
    }
    async function getPublishRequest({ token, packageInfo }) {
        token = String(token).replace(/[^a-zA-Z0-9]+/g,"")
        packageInfo = packageInfo instanceof Object ? packageInfo : {}
        // TODO: restrict package info to ensure no one field is too large
        
        let appName
        let used = false
        let otherJsonData = {}
        const path = `${dataDir}/hardware_tokens/${token}`
        try {
            var { used, appName, ...otherJsonData } = JSON.parse(await Deno.readTextFile(path))
        } catch (error) {
            throw Error(`Token ${token} not found`)
        }
        if (used && appName != packageInfo?.appName) {
            throw Error(`Token ${token} is already used for `)
        } else {
            appName = packageInfo?.appName
        }
        
        // 
        // validate package info
        // 
        isValidAppName(packageInfo.appName)
        
        if (typeof packageInfo.version !== "string") {
            throw Error(`version is required, and it must be a string`)
        } else if (!packageInfo.version.match(/^[0-9](\.\d+)*[a-z0-9\.-]*?$/g) && packageInfo.version.length <= maxNameLength) {
            throw Error(`version must start with a digit, all lowercase letters dashes and periods, and be less than 255 characters`)
        }

        // 
        // check app registry
        // 
        let externalError
        let lazyPromises = []
        if (!used) {
            lazyPromises.push(
                Deno.writeTextFile(path, JSON.stringify({ ...otherJsonData, appName, used: true }))
            )
        }
        try {
            const appPath = `${appDataDir}/${appName}`
            const ownerPath = `${appPath}/owner`
            const versionsPath = `${appPath}/versions`
            const owner = await FileSystem.read(ownerPath)
            if (!owner) {
                lazyPromises.push(FileSystem.write({ data: token, path: ownerPath }))
            } else if (owner != token) {
                throw externalError = Error(`App ${appName} already exists`)
            }
            const versions = await FileSystem.listFilePathsIn(versionsPath).then(
                paths=>
                    paths.filter(
                        each=>!each.startsWith(".")
                    ).map(
                        each=>FileSystem.basename(each)
                    )
            )
            if (versions.includes(packageInfo.version)) {
                throw Error(`Cannot publish the same version twice (${packageInfo.version})`)
            } else {
                packageInfo.keywords = packageInfo.keywords instanceof Array ? packageInfo.keywords : []
                packageInfo.description = (typeof packageInfo.description == 'string' ? packageInfo.description : '').slice(0, maxDescriptionLength)
                packageInfo.keywordsString = packageInfo.keywords.join('|')
                packageInfo.publishDate = new Date().toISOString()
                lazyPromises.push(
                    FileSystem.write({ 
                        data: JSON.stringify(packageInfo),
                        path: `${versionsPath}/${packageInfo.version}` 
                    })
                )
                lazyPromises.push(
                    searchEngine.add(packageInfo)
                )
            }
        } catch (error) {
            // clean up dangling promises
            try {
                await Promise.all(lazyPromises)
            } catch (error) {}

            if (externalError) {
                throw externalError
            } else {
                throw Error(`There was an internal isssue when trying to register a package: ${error.stack}`)
            }
        }
        await Promise.all(lazyPromises)
    }
    
    function search({ text }) {
        return miniSearch.search(text)
    }
    
    function autoSuggest({ text }) {
        return miniSearch.autoSuggest(text)
    }
    
    function getVerions({ appName }) {
        isValidAppName(appName)
        return FileSystem.listFilePathsIn(`${eachAppPath}/versions`).then(
            paths=>
                paths.filter(
                    each=>!each.startsWith(".")
                ).map(
                    each=>FileSystem.basename(each)
                )
        )
    }

    function getPackageInfo({ appName, version }) {
        return FileSystem.read(`${eachAppPath}/versions/${version}`)
    }