// apis:
    // browser.browserAction.onClicked.addListener(() => {
    // browser.tabs
    // browser.tabs.query({})
    // browser.browserAction.setBadgeText({text: length.toString()});
    // browser.browserAction.setBadgeBackgroundColor({'color': 'green'});
    // browser.browserAction.setBadgeBackgroundColor({'color': 'red'});
    // browser.tabs.onRemoved.addListener()
    // browser.tabs.onCreated.addListener()
    // runtime.sendMessage()

const source = `[background/main.js]`
console.log(`${source} loading`)
browser.runtime.onMessage.addListener((message) => {
    console.log(`${source} got message: ${message}`, message)
})
setInterval(async()=>{
   console.debug(`${source} browser.storage.local.get("articles")  is:`,await browser.storage.local.get("articles") )
}, 10000)
console.debug(`browser.storage.local is:`,browser.storage.local)
browser.storage.local.onChanged.addListener((data)=>{
    console.debug(`${source} onChange data is:`,data)
})
// background-script.js
// "use strict";

// function onError(error) {
//   console.error(`Error: ${error}`);
// }

// function sendMessageToTabs(tabs) {
//   for (const tab of tabs) {
//     browser.tabs
//       .sendMessage(tab.id, { greeting: "Hi from background script" })
//       .then((response) => {
//         console.log("Message from the content script:");
//         console.log(response.response);
//       })
//       .catch(onError);
//   }
// }

// browser.browserAction.onClicked.addListener(() => {
//   browser.tabs
//     .query({
//       currentWindow: true,
//       active: true,
//     })
//     .then(sendMessageToTabs)
//     .catch(onError);
// });

// function updateCount(tabId, isOnRemoved) {
//   browser.tabs.query({})
//   .then((tabs) => {
//     let length = tabs.length;

//     // onRemoved fires too early and the count is one too many.
//     // see https://bugzilla.mozilla.org/show_bug.cgi?id=1396758
//     if (isOnRemoved && tabId && tabs.map((t) => { return t.id; }).includes(tabId)) {
//       length--;
//     }

//     browser.browserAction.setBadgeText({text: length.toString()});
//     if (length > 2) {
//       browser.browserAction.setBadgeBackgroundColor({'color': 'green'});
//     } else {
//       browser.browserAction.setBadgeBackgroundColor({'color': 'red'});
//     }
//   });
// }


// browser.tabs.onRemoved.addListener(
//   (tabId) => { updateCount(tabId, true);
// });
// browser.tabs.onCreated.addListener(
//   (tabId) => { updateCount(tabId, false);
// });
// updateCount();