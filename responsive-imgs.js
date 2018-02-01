const glob = require('glob')
const jimp = require('jimp')
const config = require('./responsive-imgs.config')

// Resize and rename images pipeline
const getFiles = async () => {
// Get all files in the S3 bucket
  let allFiles = []
  allFiles = glob.sync(`${config.s3BucketDir}/**/*`)

  // Filter files out by our supported image filetypes
  let imgFiles = []
  allFiles.forEach(async (file) => {
    config.supportedImgFormats.forEach(async (format) => {
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
  for (let file of files) {
    let filename = await config.noExtension(file)
    let extension = await config.justExtension(file)

    // Check if its the base file
    if (!file.includes(`-${config.phone}`) && !file.includes(`-${config.tablet}`)) {
      let hasPhone = await files.findIndex((file) => {
        return file === `${filename}-${config.phone}${extension}`
      })
      let hasTablet = await files.findIndex((file) => {
        return file === `${filename}-${config.tablet}${extension}`
      })

      if (hasPhone === -1 ||
          hasTablet === -1 ||
        (hasPhone === -1 && hasTablet === -1)) {
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
        throw err
      } else {
        // Remove the file extension
        let noExtension
        let extension
        await config.supportedImgFormats.forEach(async (format) => {
          if (file.endsWith(format)) {
            // Split the path/filename with no extension
            noExtension = file.split(format)[0]

            // Strip out the path and get just the file extension
            let noPaths = file.split('/')
            noPaths = noPaths[noPaths.length - 1]
            extension = await noPaths.split('.')[1]
          }
        })
        newFile.resize(parseInt(config.phone), jimp.AUTO)
          .write(`${noExtension}-${config.phone}.${extension}`)
        newFile.resize(parseInt(config.tablet), jimp.AUTO)
          .write(`${noExtension}-${config.tablet}.${extension}`)
      }
    })
  })
}

const main = async () => {
  console.log(`Generating responsive images in directory: ${config.s3BucketDir}`)
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
