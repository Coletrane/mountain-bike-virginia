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

    it('headline and subtitle are displayed and have links if they need to', async () => {
        expect(card.findElement(
            By.xpath("//h2[@class='headline'"))
            .isDisplayed())
            .to.be.true
    })
})
