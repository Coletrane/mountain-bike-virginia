// TODO: make this an npm package with readline

// NOTE: this is from the directory you run it NOT this file's directory
const s3BucketDir = '../mtbva-s3-bucket/static/imgs'

const supportedImgFormats = [
  '.jpg',
  '.jpeg',
  '.png'
]
const phone = '480px'
const tablet = '700px'

module.exports = {
  s3BucketDir,
  phone,
  tablet,
  supportedImgFormats
}
