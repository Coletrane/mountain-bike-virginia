const global = require('../global.spec')
const By = require('selenium-webdriver').By

describe('<post-card> tests', () => {
  let testUrl
  let driver
  let expect
  let card

  before(async () => {
    testUrl = await global.testUrl
    driver = await global.driver
    expect = await global.expect

    card = await driver.findElement(
      By.className('card-container'))
  })

  it('should have a headline', async () => {
    expect(await card.findElement(
      By.xpath("//h2[@class='headline']"))
      .getText())
      .not.to.be.undefined
  })

  it('should have a subheading', async () => {
    expect(await card.findElement(
      By.xpath("//h4[@class='subheading']"))
      .getText())
      .not.to.be.undefined
  })

  it('should have a linka around the headline and subheading', async () => {
    let href = await card.findElement(
      By.xpath('//a'))
      .getAttribute('href')

    expect(href.length > 0)
      .to.be.true
  })

  it('should have <social-actions>', async () => {
    expect(await card.findElement(
      By.className('social')))
      .not.to.be.undefined
  })

  it('should have a promo section', async () => {
    expect(await card.findElement(
      By.className('promo'))
      .getText())
      .not.to.be.undefined
  })

  it('should have a media section', async () => {
    expect(await card.findElement(
      By.className('mtbva-media')))
      .not.to.be.undefined
  })
})
