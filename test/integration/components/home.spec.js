const global = require('../global.spec')
const By = require('selenium-webdriver').By

// FIXME: not the cleanest solution
// Remember to change this when more pages are added
const numberOfPages = 2

describe('<home> tests', () => {
  let driver
  let expect
  let loadMoreButton
  let cards

  before(async () => {
    driver = await global.driver
    expect = await global.expect

    await driver.sleep(3000)

    loadMoreButton = await driver.findElement(
      By.id('load-more-btn'))

    for (let i = 1; i < numberOfPages; i++) {
      await loadMoreButton.click()
    }

    await driver.sleep(3000)

    cards = await driver.findElements(
      By.className('card-container'))
  })

  it('should have cards', async () => {
    expect(cards.length > 0)
      .to.be.true
  })

  it('each card should have social links', async () => {
    for (const card of cards) {
      console.log(await card.findElement(
        By.className('headline'))
        .getAttribute('innerText'))

      let social = await card.findElement(
        By.className('social'))

      expect(social)
        .not.to.be.undefined

      let links = await social.findElements(
        By.css('a'))

      for (const link of links) {
        let href = await link.getAttribute('href')

        console.log(href)

        expect(href.includes('undefined'))
          .to.be.false

        expect(href.endsWith('//'))
          .to.be.false

        expect(href.includes('https://bikeva.com/'))
          .to.be.true
      }
    }
  })
})
