const global = require('../global.spec')
const By = require('selenium-webdriver').By
const until = require('selenium-webdriver').until

describe('<navigation> tests', () => {
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

      it('results link to /results', async () => {
        expect(await nav.findElement(
          By.id('results-link'))
          .getAttribute('href'))
          .to.equal(`${testUrl}results`)
      })

      it('facebook logo links to facebook', async () => {
        expect(await nav.findElement(
          By.id('facebook-nav-link'))
          .getAttribute('href'))
          .to.equal('https://www.facebook.com/xxcva/')
      })
    })

    describe('behavior tests', () => {
      it('navigates back to home with mtbva logo', async () => {
        let resultsLink = await driver.wait(until.elementLocated(
          By.id('results-link')), 10000)
        await resultsLink.click()

        // This is a hack because Safari is the new IE
        await driver.sleep(3000)

        expect(await driver.getCurrentUrl())
          .to.equal(`${testUrl}results`)

        // Testing mtbva logo link
        let homeLink = await driver.wait(until.elementLocated(
          By.id('mtbva-home-link')), 10000)
        await homeLink.click()

        await driver.sleep(3000)

        expect(await driver.getCurrentUrl())
          .to.equal(testUrl)
      })

      it('navigates back to home with xxcva logo', async () => {
        let resultsLink = await driver.wait(until.elementLocated(
          By.id('results-link')), 10000)
        await resultsLink.click()

        // This is a hack because Safari is the new IE
        await driver.sleep(3000)

        expect(await driver.getCurrentUrl())
          .to.equal(`${testUrl}results`)

        // Testing mtbva logo link
        let homeLink = await driver.wait(until.elementLocated(
          By.id('xxcva-home-link')), 10000)
        await homeLink.click()

        await driver.sleep(3000)

        expect(await driver.getCurrentUrl())
          .to.equal(testUrl)
      })
    })

    after(async () => {
      await driver.get(testUrl)
      await driver.sleep(5000)
    })
  })
})
