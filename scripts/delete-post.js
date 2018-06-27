const fs = require("fs")

const routeToComponentFilename = route => {
  let postFilename = route.split("-")
  postFilename = postFilename.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  postFilename = postFilename.join("")

  if (postFilename.includes("/")) {
    postFilename = postFilename.split("/")
    postFilename = postFilename.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    postFilename = postFilename.join("/")
  }

  return postFilename
}

let post = process.argv[2]

fs.unlink(`./json/posts/${post}.json`, err => {
  fs.unlink(`./pages/${post}.vue`, err => {
    post = routeToComponentFilename(post)
    if (fs.existsSync(`./components/PromoCards/${post}Promo.vue`)) {
      fs.unlink(`./components/PromoCards/${post}Promo.vue`, err => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
})
