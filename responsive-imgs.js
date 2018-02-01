const glob = require('glob')
const fs = require('fs')
const cp = require('cp')
const jimp = require('jimp')

// TODO: make this an npm package with readline
let s3BucketDir = '../imgs'

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

const getFiles = async () => {
// Get all files in the S3 bucket
  let allFiles = []
  allFiles = glob.sync(`${s3BucketDir}/**/*`)

// Filter files out by our supported image filetypes
  let imgFiles = []
  allFiles.forEach(async (file) => {
    supportedImgFormats.forEach(async (format) => {
      if (file.endsWith(format)) {
        await imgFiles.push(file)
      }
    })
  })

  return imgFiles
}

// Filter files out if they already have their responsive counterparts
let filteredImgFiles = []
const filterFiles = async (files) => {
  for (const [i, file] of files.entries()) {
    let filename = await noExtension(file)
    let extension = await justExtension(file)

    // Check if its the base file
    if (!file.includes('-480px') && !file.includes('-700px')) {
      let mobile = await files.findIndex((file) => {
        file === `${filename}-480px${extension}`
      })
      let tablet = await files.findIndex((file) => {
        file === `${filename}-700px${extension}`
      })

      if (mobile === -1
        || tablet === -1
        || (mobile === -1 && tablet === -1)) {
        await filteredImgFiles.push(file)
      }
    }

    return filteredImgFiles
  }
}

// TODO: figure out what to do with GIFS
// Resize and save as 480px and 700px
const resizeImages = (files) => {
  files.forEach(async (file) => {
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
}

const main = async () => {
  console.log(`Generating responsive images in directory: ${s3BucketDir}`)
  const imgFiles = await getFiles()
  console.log(`${imgFiles.length} images found`)
  console.log('Filtering out files that already have responsive counterparts')
  const filteredImgFiles = await filterFiles(imgFiles)
  console.log(`New images to be copied and resized: `)
  filteredImgFiles.forEach(img => console.log(img))
  console.log('Resizing images...')
  resizeImages(filteredImgFiles)
  console.log('Done!')
}
main()


module.exports = supportedImgFormats
