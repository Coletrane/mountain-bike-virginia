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

// helpers for extracting filenames
const noExtension = async (file) => {
  let filename
  await supportedImgFormats.forEach(async (format) => {
    if (file.endsWith(format)) {
      filename = await file.split(format)[0]
    }
  })

  return filename
}

const justExtension = async (file) => {
  let extension
  await supportedImgFormats.forEach(async (format) => {
    if (file.endsWith(format)) {
        const extensionStart = file.indexOf(format)
        extension = await file.slice(extensionStart)
    }
  })

  return extension
}

let allFiles = []
let imgFiles = []
// Get all files in the S3 bucket
allFiles = glob.sync(`${s3BucketDir}/**/*`)

// Filter files out by our supported image filetypes
allFiles.forEach(async (file) => {
    supportedImgFormats.forEach(async (format) => {
        if (file.endsWith(format)) {
            await imgFiles.push(file)
        }
    })
})

// Filter files out if they already have their responsive counterparts
const filterResponsive = async () => {
  await imgFiles.forEach(async (file, i, arr) => {
    let filename = await noExtension(file)
    let extension = await justExtension(file)

    // Check if its the base file
    if (!file.includes('-480px') && !file.includes('-700px')) {
      let mobile = imgFiles.findIndex((file) => file === `${filename}-480px${extension}`)
      let desktop = imgFiles.findIndex((file) => file === `${filename}-700px${extension}`)

      if (mobile > 0) {
        await imgFiles.splice(mobile, 1)
      }
      if (desktop > 0) {
        await imgFiles.splice(desktop, 1)
      }
      if (mobile > 0 && desktop > 0) {
        await imgFiles.splice(i, 1)
      }
    }
  })
}


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
      // newFile.resize(480, jimp.AUTO)
      //   .write(`${noExtension}-480px.${extension}`)
      // newFile.resize(700, jimp.AUTO)
      //   .write(`${noExtension}-700px.${extension}`)
    }
  })
})


module.exports = supportedImgFormats
