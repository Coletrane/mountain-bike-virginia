const glob = require('glob')
const fs = require('fs')
const cp = require('cp')
const jimp = require('jimp')

// TODO: make this an npm package with readline
let s3BucketDir = '../imaagemagick-exploration'

const supportedImgFormats = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif'
]

let allFiles = []
let imgFiles = []
// Get all files in the S3 bucket
allFiles = glob.sync(`${s3BucketDir}/**/*`)

// Filter files out by our supported image filetypes
// TODO: check if responsive sizes already exist
allFiles.forEach(async (file) => {
    supportedImgFormats.forEach(async (format) => {
        if (file.endsWith(format)) {
            await imgFiles.push(file)
        }
    })
})

// TODO: figure out what to do with GIFS
// Resize and save as 480px and 700px
imgFiles.forEach(async (file) => {
  jimp.read(file, async (err, newFile) => {
    if (err) {
      throw err;
    } else {
      // Remove the file extension
      let noExtension
      let extension
      await supportedImgFormats.forEach(async (format) => {
        if (file.endsWith(format)) {
          // Split the path/filename with no extension
          noExtension = file.split(format)[0]

          // Strip out the path and get just the file extension
          let noPaths = file.split('/')
          noPaths = noPaths[noPaths.length - 1]
          extension = await noPaths.split(".")[1]
        }
      })
      newFile.resize(480, jimp.AUTO)
        .write(`${noExtension}-480px.${extension}`)
      newFile.resize(700, jimp.AUTO)
        .write(`${noExtension}-700px.${extension}`)
    }
  })
})


module.exports = supportedImgFormats
