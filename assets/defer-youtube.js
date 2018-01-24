const defer = function() {
  let elements = document.getElementsByClassName("yt-iframe")
  elements.forEach(elem => {
    let src = elem.getAttribute("url")
    if (src) {
      elem.setAttribute("src", src)
      elem.removeAttribute("url")
    }
  })
}()
