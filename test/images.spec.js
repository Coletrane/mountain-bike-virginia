const chai = require("chai")
chai.use(require("chai-as-promised"))
const expect = chai.expect

const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Danger Zone: try to make srcset for everything
const blacklist = []
const whitelist = file => {
  return (
    !file.includes("-480") &&
    !file.includes("-720") &&
    (path.extname(file) === ".jpg" || path.extname(file) === ".png") &&
    !blacklist.find(blackFile => file.endsWith(blackFile))
  )
}

const imageFiles = glob.sync("../mtbva-s3-bucket/pages/**/*", {
  nodir: true
})
describe("image files test", () => {
  for (const file of imageFiles) {
    // "Full res" image file
    if (whitelist(file)) {
      it(`${file} should have 480 width`, () => {
        expect(
          imageFiles.find(imgFile => {
            return (
              `${file.replace(path.extname(file), "")}-480${path.extname(
                file
              )}` === imgFile
            )
          })
        ).not.to.be.undefined
      })
      it(`${file} should have 720 width`, () => {
        expect(
          imageFiles.find(imgFile => {
            return (
              `${file.replace(path.extname(file), "")}-720${path.extname(
                file
              )}` === imgFile
            )
          })
        ).not.to.be.undefined
      })
    }
  }
})
