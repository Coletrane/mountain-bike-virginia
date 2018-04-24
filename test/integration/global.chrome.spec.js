const selenium = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

let testUrl = 'http://localhost:3000'

const importTest = (path) => {
  describe(path, () => {
    require(path)('chrome')
  })
}

describe('Google Chrome integration tests', () => {
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

  importTest('./navigation.spec')
  importTest('./home.spec')
  importTest('./routes.spec')
  importTest('./results.spec')

  after(() => {
    driver.quit()
  })
})
