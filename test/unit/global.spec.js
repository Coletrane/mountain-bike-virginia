const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

exports.expect = expect

const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}

describe('Mountain Bike Virginia unit tests', () => {
  before(() => {

  })

  importTest('./results.spec')
  importTest('./functions.spec')
  importTest('./weather.spec')

  after(() => {

  })
})
