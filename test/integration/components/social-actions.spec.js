const global = require('../global.spec')
const By = require('selenium-webdriver').By

describe('<social-actions> tests', () => {
  let driver
  let expect

  before(async () => {
    driver = await global.driver
    expect = await global.expect
  })

  describe('3 links test', () => {
    let action
    let threeLinks

    before(async () => {
      action = await driver.findElement(
        By.className('social'))
      threeLinks = await action.findElements(
        By.css('a'))
    })

    it('should have 3 links', () => {
      expect(threeLinks.length)
        .to.equal(3)
    })
  })

  describe('all links test', () => {
    let allActions
    let allLinks = []
    let fbLinks = []
    let redditLinks = []
    let twitterLinks = []

    before(async () => {
      allActions = await driver.findElements(
        By.className('social'))

      for (const action of allActions) {
        let links = await action.findElements(
          By.css('a'))

        for (const link of links) {
          allLinks.push(await link.getAttribute('href'))

          let href = await link.getAttribute('href')

          if (await href.includes('facebook')) {
            fbLinks.push(await href)
          } else if (await href.includes('reddit')) {
            redditLinks.push(await href)
          } else if (await href.includes('twitter')) {
            twitterLinks.push(await href)
          }
        }
      }
    })

    it('should have links', async () => {
      expect(await allLinks.length > 0)
        .to.be.true

      allLinks.forEach(href => {
        console.log(`all links test: ${href}`)

        expect(href.includes('undefined'))
          .to.be.false

        expect(href.endsWith('//'))
          .to.be.false

        expect(href.includes('https://bikeva.com/'))
          .to.be.true
      })
    })

    describe('facebook links test', () => {
      it('should have fb links', async () => {
        expect(await fbLinks.length > 0)
          .to.be.true

        fbLinks.forEach(href => {
          console.log(`facebook links test: ${href}`)

          expect(href.startsWith('http://www.facebook.com/share.php?u='))
        })
      })
    })

    describe('reddit links test', () => {
      it('should have reddit links', async () => {
        expect(await redditLinks.length > 0)
          .to.be.true

        redditLinks.forEach(href => {
          console.log(`reddit links test: ${href}`)

          expect(href.startsWith('http://www.reddit.com/submit?url='))
        })
      })
    })

    describe('twitter links tests', () => {
      it('should have twitter links', async () => {
        expect(await twitterLinks.length > 0)
          .to.be.true

        twitterLinks.forEach(href => {
          console.log(`twitter links test:  ${href}`)

          expect(href.startsWith('http://twitter.com/home?status='))
            .to.be.true
        })
      })
    })
  })
})
