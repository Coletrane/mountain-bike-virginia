const global = require('./global.spec')
const By = require('selenium-webdriver').By
const routes = require('../../scripts/routes')

describe('results tests', () => {
  let driver
  let expect
  let testUrl
  let childRoutes = routes.appRoutes.filter(route => route.startsWith('/results/'))

  before(async () => {
    driver = await global.driver
    expect = await global.expect
    testUrl = await global.testUrl
  })

  describe('results child routes test', () => {
    for (const route of childRoutes) {
      const justChildRoute = route.split('/')[2]
      const formattedRoute = justChildRoute.split('-').join(' ')

      it(`should have ${formattedRoute} in the select box`, async () => {
        await driver.get(`${testUrl}${route}`)

        let dropdownText = await driver.findElement(
          By.id('dropdownMenuButton'))
          .getText()

        expect(dropdownText.toLowerCase().includes(formattedRoute))
          .to.be.true
      })
    }
  })
})
