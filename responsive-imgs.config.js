// TODO: make this an npm package with readline
const s3BucketDir = '../mtbva-s3-bucket/'

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
