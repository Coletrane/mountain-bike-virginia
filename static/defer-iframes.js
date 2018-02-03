(function () {
  let iframes = document.getElementsByTagName('iframe')

  if (iframes.length > 0) {
    for (var i = 0; i < iframes.length; i++) {
      var url = iframes[i].getAttribute('url')

      if (url) {
        iframes[i].setAttribute('src', url)
        iframes[i].removeAttribute('url')
      }
    }
  }
}())
