const selenium = require('selenium-webdriver')
const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

const timeout = 10000
let driver

describe('index.vue test', () => {
  before(() => {
    driver = new selenium.Builder()
      .withCapabilities(selenium.Capabilities.chrome())
      .build()
    driver.getWindowHandle()
  })

  after(() => {
    driver.quit()
  })

  it('has the Mountain Bike Virginia title', () => {
    expect(driver.getTitle()).to.contain('Mountain Bike Virginia')
  })
})
