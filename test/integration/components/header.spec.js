const global = require('../global.spec')
const By = require('selenium-webdriver').By
const until = require('selenium-webdriver').until

describe('<m-t-b-v-a-header> tests', () => {
  let testUrl
  let driver
  let expect

  before(async () => {
    testUrl = await global.testUrl
    driver = await global.driver
    expect = await global.expect
  })

  describe('text tests', () => {
    it('should have a header', async () => {
      expect(await driver.findElement(
        By.id('mtbva-header')))
        .to.be.an('object')
    })

    it('should have a title', async () => {
      expect(await driver.findElement(
        By.id('mtbva-title'))
        .getText())
        .to.equal('Mountain Bike Virginia')
    })

    it('should have a subtitle', async () => {
      // wait for the animation to finish
      let subtitle = await driver.wait(until.elementLocated(
        By.id('mtbva-subtitle')))

      // Quite odd that getText() sometimes returns something, sometimes doesn't
      // Using contain here because there are some spaces and /n in the string
      expect(await subtitle.getAttribute('innerHTML'))
        .to.contain('Exposing the trove of trails in The Old Dominion')
    })

    it('shold have events button', async () => {
      // wait for animation to finish
      let button = await driver.wait(until.elementLocated(
        By.id('events-button')))

      expect(await button.getAttribute('innerHTML'))
        .to.contain('Events')

      expect(await button.getAttribute('href'))
        .to.equal('https://www.facebook.com/pg/xxcva/events/')
    })
  })
})
