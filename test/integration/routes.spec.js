const global = require('./global.spec')
const By = require('selenium-webdriver').By
const routes = require('../../scripts/routes')
const request = require('request-promise')

describe('routes tests', () => {
  let driver
  let expect
  let testUrl
  let routesWithHome = routes.routesWithIndex
  routesWithHome.unshift('/')

  before(async () => {
    driver = await global.driver
    expect = await global.expect
    testUrl = await global.testUrl
  })

  for (const route of routesWithHome) {
    describe(route, () => {
      it('should have index.html', async () => {
        if (route === '/') {
          await driver.get(`${testUrl}`)
        } else {
          await driver.get(`${testUrl}${route}`)
        }

        // Idk why Safari requires I do this
        driver.sleep(3000)

        let res = await request({
          uri: `${testUrl}`,
          resolveWithFullResponse: true
        })

        expect(await res.statusCode)
          .to.equal(200)
      })

      it('has title', async () => {
        expect(await driver.findElement(
          By.css('title')))
          .not.to.be.undefined
      })

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
          .to.equal('1 week')
      })

      it('has fb:app_id', async () => {
        expect(await driver.findElement(
          By.xpath("//meta[@property='fb:app_id']"))
          .getAttribute('content'))
          .to.equal('1426359417419881')
      })

      describe('og:image', () => {
        let ogImage

        before(async () => {
          ogImage = await driver.findElement(
            By.xpath("//meta[@property='og:image']"))
            .getAttribute('content')
        })

        it('has og:image meta tag', async () => {
          expect(ogImage.endsWith(routes.imgRoutes[route]))
            .to.be.true
        })

        it('can GET og:image url', async () => {
          let res = await request({
            uri: ogImage,
            resolveWithFullResponse: true
          })

          expect(await res.statusCode)
            .to.equal(200)
        })
      })

      it('has og:title', async () => {
        expect(await driver.findElement(
          By.xpath("//meta[@property='og:title']"))
          .getAttribute('content'))
          .not.to.be.undefined
      })

      it('has og:description', async () => {
        expect(await driver.findElement(
          By.xpath("//meta[@property='og:description']")))
          .not.to.be.undefined
      })

      it('has og:url', async () => {
        let expected
        if (route === '/') {
          expected = `${routes.baseUrl}/`
        } else {
          expected = `${routes.baseUrl}/${route}`
        }
        expect(await driver.findElement(
          By.xpath("//meta[@property='og:url']"))
          .getAttribute('content'))
          .to.equal(expected)
      })
    })
  }

  after(async () => {
    await driver.get(testUrl)
    await driver.sleep(3000)
  })
})
