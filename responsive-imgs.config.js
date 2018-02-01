// TODO: make this an npm package with readline
const s3BucketDir = '../imgs'

const supportedImgFormats = [
  '.jpg',
  '.jpeg',
  '.png',
  '.gif'
]
const phone = '480px'
const tablet = '700px'

// helpers for extracting filenamesn
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

module.exports = {
  s3BucketDir,
  phone,
  tablet,
  supportedImgFormats,
  noExtension,
  justExtension
}
