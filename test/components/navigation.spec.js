const global = require('../global.spec')
const By = require('selenium-webdriver').By

describe('<m-t-b-v-a-header> tests', () => {
  let testUrl
  let driver
  let expect

  before(async () => {
    testUrl = await global.testUrl
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

  it('has the XXCVA logo', async () => {
    let logo = await driver.findElement(
      By.id('xxcva-logo'))

    expect(await logo.getAttribute('alt'))
      .to.equal('XXCVA Series. Just 40 more miles.')
    expect(await logo.isDisplayed())
      .to.be.true
  })

  it('has the Facebook nav icon', async () => {
    let logo = await driver.findElement(
      By.id('fb-navlink-icon'))

    expect(await logo.isDisplayed())
      .to.be.true
  })

  describe('<nuxt-link> / <a> tests', () => {
    let nav

    before(async () => {
      nav = await driver.findElement(
        By.xpath('//nav'))
    })

    describe('element tests', () => {
      it('mtbva logo link to home', async () => {
        expect(await nav.findElement(
          By.id('mtbva-home-link'))
          .getAttribute('href'))
          .to.equal(testUrl)
      })

      it('xxcva logo link to home', async () => {
        expect(await nav.findElement(
          By.id('xxcva-home-link'))
          .getAttribute('href'))
          .to.equal(testUrl)
      })
    })

    describe('behavior tests', () => {

    })
  })
})
