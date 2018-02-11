const global = require('./global.spec')
const By = require('selenium-webdriver').By

describe('<head> tests', () => {
  let driver
  let expect

  before(async () => {
    driver = await global.driver
    expect = await global.expect
  })

  it('has the correct <title>', async () => {
    expect(await driver.getTitle())
      .to.equal('Mountain Bike Virginia')
  })

  describe('<meta> tests', () => {
    it('has viewport', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@name='viewport']"))
        .getAttribute('content'))
        .to.equal('width=device-width,initial-scale=1')
    })

    it('has robots', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@name='robots']"))
        .getAttribute('content'))
        .to.equal('index, follow')
    })

    it('has revisit-after', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@name='revisit-after']"))
        .getAttribute('content'))
        .to.equal('1 month')
    })

    it('has fb:app_id', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@property='fb:app_id']"))
        .getAttribute('content'))
        .to.equal('1426359417419881')
    })

    it('has og:image', async () => {
      let ogImage = await driver.findElement(
        By.xpath("//meta[@property='og:image']"))
        .getAttribute('content')
      expect(ogImage.endsWith('foliage.png'))
        .to.be.true
    })

    it('has og:title', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@property='og:title']"))
        .getAttribute('content'))
        .to.equal('Mountain Bike Virginia')
    })

    it('has og:description', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@property='og:title']")))
        .not.to.be.undefined
    })

    it('has og:url', async () => {
      expect(await driver.findElement(
        By.xpath("//meta[@property='og:url']"))
        .getAttribute('content'))
        .to.equal('http://bikeva.com')
    })
  })
})
