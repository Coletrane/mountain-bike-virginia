const global = require('./global.spec')
const By = require('selenium-webdriver').By
const routes = require('../../scripts/routes')

// routes that exist in the object but DON'T have an associated page

describe('routes tests', () => {
  let driver
  let expect
  let testUrl

  before(async () => {
    driver = await global.driver
    expect = await global.expect
    testUrl = await global.testUrl
  })

  it(`should have index.html for all the routes`, async () => {
    for (const route of routes.routesWithIndex) {
      console.log(`GET/${route}`)
      await driver.get(`${testUrl}${route}`)

      expect(await driver.findElement(
        By.id('mtbva-home-link'))
        .isDisplayed())
        .to.be.true
    }
  })

  after(async () => {
    await driver.get(testUrl)
  })
})
