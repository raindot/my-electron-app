const createCORSRequest = function (method, url) {
  let xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    // Most browsers.
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest !== 'undefined') {
    // IE8 & IE9
    // xhr = new XDomainRequest()
    // xhr.open(method, url)
  } else {
    // CORS not supported.
    xhr = null
  }
  return xhr
}

const url = 'https://data.wra.gov.tw/Service/OpenData.aspx?format=json&id=A6206012-B8B2-41B1-A50C-F31E754751DB'
const method = 'GET'
const xhr = createCORSRequest(method, url)

xhr.onload = function () {
  // Success code goes here.
}

xhr.onerror = function () {
  // Error code goes here.
}

xhr.send()