# chrome-getheaders
This Chrome extension makes the HTTP headers of the _main_frame_ response (the response responsible for the website visible in the browser) available to the DOM.

It was built to gain access to the HTTP status code, request method and response headers over the WebDriver protocol in a browser automation scenario. It's an alternative to the BrowserMob proxy.

## Security
Please be aware that this extension exposes all headers of the current page to the DOM to any script running in the current page listening for the ```GotHeaders``` event. Those headers could contain sensitive information like session identifiers. This should not be an issue in an isolated automated end-to-end test, but for any other use case you should ask yourself the following question: "Do I trust the code running in the DOM with the headers (don't forget about XSS and persistent XSS)?"

## Usage
Package the extension using Chrome. Then install it via the WebDriver capabilities (described [here](https://sites.google.com/a/chromium.org/chromedriver/extensions)).

Bellow you'll find a general example how to talk to the extension within the DOM. You can combine this with WebDriver's ability to execute javascript asynchronously by calling the WebDriver callback instead of ```console.log```.

```js
// First we need to add an event listener to listen for the event
// The response including the headers is stored in event.detail
document.addEventListener('GotHeaders', function(event) { console.log(event.detail) })

// Now, dispatch the custom GetHeaders event.
// This triggers the extension and causes the GotHeaders event to fire with the results
document.dispatchEvent(new CustomEvent('GetHeaders'))
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
## License
[MIT](LICENSE)
