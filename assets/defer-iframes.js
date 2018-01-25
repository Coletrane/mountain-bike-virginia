(function() {
  var elements = document.getElementsByTagName("iframe")
  if (elements.length > 0) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].url) {
        elements[i].src = elements[i].url
        elements[i].removeAttribute('url')
      }
    }
  }
}())
