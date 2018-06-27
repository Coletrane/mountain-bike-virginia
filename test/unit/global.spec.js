const chai = require("chai")
chai.use(require("chai-as-promised"))
const expect = chai.expect

exports.expect = expect

const importTest = path => {
  describe(path, () => {
    require(path)
  })
}

describe("Mountain Bike Virginia unit tests", () => {
  importTest("./functions.spec")
  // importTest('./weather.spec') //TODO: change this to local
})
