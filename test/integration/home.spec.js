import posts from '../../store/posts'
import _ from 'lodash'
import * as routes from '../../scripts/routes'

const global = require('./global.spec')
const By = require('selenium-webdriver').By

const numberOfPages = posts.state.pages.length

describe('<home> tests', () => {
  let driver
  let expect
  let cards

  before(async () => {
    driver = await global.driver
    expect = await global.expect

    console.log('Sleeping')
    await driver.sleep(3000)
    console.log('Sleep over!')

    for (let i = 1; i < numberOfPages; i++) {
      let loadMoreButton = await driver.findElement(
        By.id('load-more-btn'))
      if (await loadMoreButton) {
        console.log('Clicking Load More button')
        driver.executeScript("document.getElementById('load-more-btn').click();")
      }
    }

    await driver.sleep(3000)
    console.log('New page sleep over!')

    cards = await driver.findElements(
      By.className('card-container'))
  })

  it('should have cards', async () => {
    expect(cards.length > 0)
      .to.be.true
  })

  for (const [i, post] of _.flatten(posts.state.pages).entries()) {
    it('should have a headline', async () => {
      expect(await cards[i].findElement(
        By.className('headline'))
        .getText())
        .not.to.be.undefined
    })

    it('should have a subheading', async () => {
      expect(await cards[i].findElement(
        By.className('subheading'))
        .getText())
        .not.to.be.undefined
    })

    if (post !== routes.relaunch && post !== routes.creature2016) {
      it('should have a link around the headline and subheading', async () => {
        let href = await cards[i].findElement(
          By.xpath('//a'))
          .getAttribute('href')

        expect(href.length > 0)
          .to.be.true
      })
    }

    describe('<post-card> <social-actions> test', () => {
      let social

      before(async () => {
        social = await cards[i].findElement(
          By.className('social'))
      })

      it('should have <social-actions>', async () => {
        expect(await social)
          .not.to.be.undefined
      })

      describe('<social-actions> link validity test', () => {
        let links

        before(async () => {
          links = await social.findElements(
            By.css('a'))
        })

        it('should have 3 links', async () => {
          expect(await links.length)
            .to.equal(3)
        })

        const linkTypes = [
          'facebook',
          'reddit',
          'twitter'
        ]
        for (const [j, link] of linkTypes.entries()) {
          it(`should have a valid ${link} link`, async () => {
            let href = await links[j].getAttribute('href')
            console.log(href)

            expect(href.includes('undefined'))
              .to.be.false

            expect(href.endsWith('//'))
              .to.be.false

            expect(href.includes('https://bikeva.com/'))
              .to.be.true
          })
        }
      })
    })

    it('should have a media section', async () => {
      expect(await cards[i].findElement(
        By.className('mtbva-media')))
        .not.to.be.undefined
    })
  }
})