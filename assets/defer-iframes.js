(function() {
  var elements = document.getElementsByTagName("iframe")
  if (elements.length > 0) {
    for (var i = 0; i < elements.length; i++) {
      var url = elements[i].getAttribute("url")
      if (url) {
        elements[i].setAttribute("src", url)
        elements[i].removeAttribute('url')
      }
    }
  }
}())
