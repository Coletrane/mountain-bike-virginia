const fs = require("fs")

const fileNeedsResponsiveImage = file => {
  return (
    (file.endsWith(".jpg") || file.endsWith(".png")) &&
    !file.endsWith("-1280.jpg") &&
    !file.endsWith("-1280.png") &&
    !file.endsWith("-720.jpg") &&
    !file.endsWith("-720.png") &&
    !file.endsWith("-480.jpg") &&
    !file.endsWith("-480.png")
  )
}

const sortFilesByCreatedTime = filesWithDir => {
  return filesWithDir
    .map(file => {
      return {
        name: file,
        time: fs.statSync(file).birthtime.getTime()
      }
    })
    .sort((a, b) => {
      return a.time - b.time
    })
    .map(f => {
      return f.name
    })
}

module.exports = {
  fileNeedsResponsiveImage,
  sortFilesByCreatedTime
}
