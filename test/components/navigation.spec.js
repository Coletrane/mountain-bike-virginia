const global = require('../global.spec')
const By = require('selenium-webdriver').By

describe('<m-t-b-v-a-header> tests', () => {
  let driver
  let expect

  before(async () => {
    driver = await global.driver
    expect = await global.expect
  })

  it('has the MTBVA logo', async () => {
    let logo = await driver.findElement(
      By.id('mtbva-logo'))

    expect(await logo.getAttribute('alt'))
      .to.equal('Mountain Bike Virginia')
    expect(await logo.isDisplayed())
      .to.be.true
  })
})
