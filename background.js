var responses = {}

var filter = {
  urls: ["http://*/*", "https://*/*"],
  types: ["main_frame"]
}

var options = ["responseHeaders"]

chrome.webRequest.onHeadersReceived.addListener(function(details) {
  responses[details.url] = details
}, filter, options)


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      sendResponse({headers: responses[sender.tab.url]})
})