const fs = require('fs')
const path = require('path')
const glob = require('glob')
const rl = require("readline-sync")
const helpers = require("./helper-functions")

const rootDir = "../mtbva-s3-bucket/pages"

let route
while (!fs.existsSync(`${rootDir}/${route}`)) {
  route = rl.question("What is this post's route? ")
}

let images = glob.sync(`${rootDir}/${route}/**/*.jpg`)

images = images.filter(image => {
  return helpers.fileNeedsResponsiveImage(image)
})

const sortedImages = helpers.sortFilesByCreatedTime(images)

images.forEach(image => {
  console.log(`<blog-image :src="img + '${path.basename(image)}'"/>`)
})