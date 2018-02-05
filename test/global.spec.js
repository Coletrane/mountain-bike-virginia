const selenium = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

const testUrl = 'http://aws-website-mountainbikevirginia-sbin6-test.s3-website-us-east-1.amazonaws.com/'

const importTest = (path) => {
  describe(path, () => {
    require(path)
  })
}

describe('Mountain Bike Virginia integration tests', () => {
  let driver

  before(async () => {
    driver = await new selenium.Builder()
      .withCapabilities(selenium.Capabilities.chrome())
      .build()
    await driver.get(testUrl)
    exports.expect = expect
    exports.driver = driver
  })

  // Hook tests in here
  importTest('./head.spec.js')
  importTest('./components/navigation.spec.js')

  after(() => {
    driver.quit()
  })
})
