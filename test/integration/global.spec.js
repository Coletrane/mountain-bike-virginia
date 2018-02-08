const selenium = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

let testUrl
if (process.env.NODE_ENV === 'production') {
  testUrl = 'http://bikeva.com/'
} else {
  testUrl = 'http://aws-website-mountainbikevirginia-sbin6-test.s3-website-us-east-1.amazonaws.com/'
}

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
    exports.testUrl = testUrl
    exports.expect = expect
    exports.driver = driver
  })

  // Hook tests in here
  importTest('./head.spec')
  importTest('./routes.spec')
  importTest('./components/navigation.spec')
  importTest('./components/header.spec')

  after(() => {
    driver.quit()
  })
})
