const global = require('./global.spec')
const By = require('selenium-webdriver').By
const until = require('selenium-webdriver').until
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
      describe('<head> tests', () => {
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

      describe('<m-t-b-v-a-header> tests', () => {
        describe('text tests', () => {
          it('should have a header', async () => {
            expect(await driver.findElement(
              By.id('mtbva-header'))
              .isDisplayed())
              .to.be.true
          })

          if (route !== 'results') {
            it('should have a title', async () => {
              expect(await driver.findElement(
                By.id('mtbva-title'))
                .getAttribute('innerText'))
                .not.to.be.undefined
            })

            it('should have a subtitle', async () => {
              // wait for the animation to finish
              let subtitle = await driver.wait(until.elementLocated(
                By.id('mtbva-subtitle')))

              // Quite odd that getText() sometimes returns something, sometimes doesn't
              // Using contain here because there are some spaces and /n in the string
              expect(await subtitle.getAttribute('innerHTML'))
                .not.to.be.undefined
            })
          }

          if (route === '/') {
            it('shold have events button', async () => {
              // wait for animation to finish
              let button = await driver.wait(until.elementLocated(
                By.id('events-button')))

              expect(await button.getAttribute('innerHTML'))
                .to.contain('Events')

              expect(await button.getAttribute('href'))
                .to.equal('https://www.facebook.com/pg/xxcva/events/')
            })
          }
        })
      })

      describe('<social-links> test', () => {
        if (route === '/') {
          describe('<home> social links test', () => {

          })
        } else if (route !== 'results') { // TODO: add social links to results
          describe(`${route} social links test`, () => {
            let social
            let links
            let hrefs = []

            const testLinksValid = async (href) => {
              console.log(`test validity: ${href}`)
              it('should not include undefined', async () => {
                expect(await href.includes('undefined'))
                  .to.be.false
              })

              it('should not end with //', async () => {
                expect(await href.endsWith('//'))
                  .to.be.false
              })

              it('should include bikeva.com', async () => {
                expect(await href.includes(routes.baseUrl))
                  .to.be.true
              })

              // TODO: GET the links
            }

            before(async () => {
              social = await driver.findElement(
                By.className('social'))

              links = await social.findElements(
                By.css('a'))

              for (const link of await links) {
                hrefs.push(await link.getAttribute('href'))
              }
            })

            it('should have 3 links', async () => {
              expect(await links.length)
                .to.equal(3)
            })

            it('should have valid links', async () => {
              for (const href of await hrefs) {
                if (href.includes('facebook')) {
                  testLinksValid(href)
                } else if (href.includes('reddit')) {
                  testLinksValid(href)
                } else if (href.includes('twitter')) {
                  testLinksValid(href)
                }
              }
            })
          })
        }
      })
    })
  }

  after(async () => {
    await driver.get(testUrl)
    await driver.sleep(3000)
  })
})
