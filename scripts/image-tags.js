import {fileNeedsResponsiveImage} from './create-post'

const fs = require('fs')
const glob = require('glob')
const rl = require("realine-sync")

const rootDir = "../mtbva-s3-bucket/pages"

let route = ""
while (!fs.existsSync(`${rootDir}/${route}`)) {
  route = rl.question("What is this post's route?")
}

const images = glob.sync(`${rootDir}/${route}/**/*.jpg`)
images.filter(image => {
  return fileNeedsResponsiveImage(file)
})

export const sortFilesByCreatedTime = (dir, files) => {
  files = files.map(filename => {
    return {
      name: filename,
      time: fs.statSync(`${dir}/${filename}`).birthtime.getTime()
    }
  })
    .sort((a, b) => {
      return a.time - b.time
    })
    .map(f => {
      return f.name
    })
}


images.forEach(image => {
  console.log(`<blog-image :src="img + '${image}'"/>\``)
})