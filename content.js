document.addEventListener('GetHeaders', function(event) {
  chrome.runtime.sendMessage(chrome.runtime.id, {}, {}, function(response) {
    document.dispatchEvent(new CustomEvent("GotHeaders", {detail: response.headers}))
  })  
})