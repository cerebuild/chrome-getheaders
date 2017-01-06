# chrome-getheaders
This extension makes the HTTP headers available to the DOM.

It was built to gain access to the HTTP response and headers over the WebDriver protocol.

## Usage
```js
// First we need to add an event listener to listen for the event
// The response including the headers is stored in event.detail
document.addEventListener('GotHeaders', function(event) { console.log(event.detail) })

// Now, dispatch the custom GetHeaders event
document.dispatchEvent(new CustomEvent("GetHeaders"))
```

The result may look like this
```json
{
  "frameId": 0,
  "method": "GET",
  "parentFrameId": -1,
  "requestId": "14030",
  "responseHeaders": [
    {
      "name": "Server",
      "value": "nginx"
    },
    {
      "name": "Content-Type",
      "value": "text\/html; charset=utf-8"
    },
    {
      "name": "Content-Encoding",
      "value": "gzip"
    },
    {
      "name": "X-Cobbler",
      "value": "octo01.heise.de"
    },
    {
      "name": "X-Clacks-Overhead",
      "value": "GNU Terry Pratchett"
    },
    {
      "name": "Last-Modified",
      "value": "Fri, 06 Jan 2017 20:12:25 GMT"
    },
    {
      "name": "Expires",
      "value": "Fri, 06 Jan 2017 20:12:59 GMT"
    },
    {
      "name": "Cache-Control",
      "value": "public, max-age=32"
    },
    {
      "name": "Content-Length",
      "value": "49421"
    },
    {
      "name": "Accept-Ranges",
      "value": "bytes"
    },
    {
      "name": "Date",
      "value": "Fri, 06 Jan 2017 20:12:35 GMT"
    },
    {
      "name": "Age",
      "value": "8"
    },
    {
      "name": "Connection",
      "value": "keep-alive"
    },
    {
      "name": "Content-Security-Policy-Report-Only",
      "value": "default-src 'self' data: 'unsafe-inline' 'unsafe-eval' https:; report-uri https:\/\/heise.report-uri.io\/r\/default\/csp\/reportOnly https:\/\/heise.de\/csp\/"
    },
    {
      "name": "Vary",
      "value": "User-Agent,Accept-Encoding,X-Forwarded-Proto,X-Export-Format,X-Export-Agent"
    }
  ],
  "statusCode": 200,
  "statusLine": "HTTP\/1.1 200 OK",
  "tabId": 187,
  "timeStamp": 1483733640040.8,
  "type": "main_frame",
  "url": "https:\/\/www.heise.de\/"
}
```
