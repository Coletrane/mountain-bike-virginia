import { routes } from '../../scripts/build-routes-json'

module.exports = (browser) => {
  const global = require(`./global.${browser}.spec`)
  const By = require('selenium-webdriver').By
  const until = require('selenium-webdriver').until
  const request = require('request-promise')

  const googleDataValidator = 'https://search.google.com/structured-data/testing-tool/validate'

  describe('routes tests', () => {
    let driver
    let expect
    let testUrl

    before(async () => {
      driver = await global.driver
      expect = await global.expect
      testUrl = await global.testUrl
    })

    for (const route of routes) {
      describe(route, () => {
        let url

        before(async () => {
          if (route === '/') {
            url = await testUrl
          } else {
            url = await `${testUrl}/${route}`
          }
        })
        describe('<head> tests', () => {
          it('should navigate to route', async () => {
            await driver.get(url)

            // Idk why Safari requires I do this
            // await driver.sleep(6000)

            let res = await request({
              uri: await url,
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
              By.xpath('//meta[@name=\'viewport\']'))
                               .getAttribute('content'))
              .not.to.be.undefined
          })

          it('has robots', async () => {
            expect(await driver.findElement(
              By.xpath('//meta[@name=\'robots\']'))
                               .getAttribute('content'))
              .to.equal('index, follow')
          })

          it('has revisit-after', async () => {
            expect(await driver.findElement(
              By.xpath('//meta[@name=\'revisit-after\']'))
                               .getAttribute('content'))
              .to.equal('1 week')
          })

          it('has fb:app_id', async () => {
            expect(await driver.findElement(
              By.xpath('//meta[@property=\'fb:app_id\']'))
                               .getAttribute('content'))
              .to.equal('1426359417419881')
          })

          describe('og:image', () => {
            let ogImage

            before(async () => {
              ogImage = await driver.findElement(
                By.xpath('//meta[@property=\'og:image\']'))
                                    .getAttribute('content')
            })

            it('has og:image meta tag', async () => {
              let expected

              if (route !== '/' &&
                  !route.includes('results') &&
                  route !== 'xxc-va-race-series/2018') {
                const postJson = require(`../../json/posts/${route}.json`)
                expected = postJson.imgRoute
              } else if (route === '/') {
                expected = 'foliage.jpg'
              } else {
                expected = '.jpg'
              }

              expect(ogImage.endsWith(expected))
                .to.be.true
            })

            xit('can GET og:image url', async () => {
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
              By.xpath('//meta[@property=\'og:title\']'))
                               .getAttribute('content'))
              .not.to.be.undefined
          })

          it('has og:description', async () => {
            expect(await driver.findElement(
              By.xpath('//meta[@property=\'og:description\']')))
              .not.to.be.undefined
          })

          it('has og:url', async () => {
            let expected
            if (route === '/') {
              expected = `https://bikeva.com/`
            } else if (route.endsWith('/')) {
              expected = `https://bikeva.com/${route}`
            } else {
              expected = `https://bikeva.com/${route}/`
            }
            expect(await driver.findElement(
              By.xpath('//meta[@property=\'og:url\']'))
                               .getAttribute('content'))
              .to.equal(expected)
          })

          xit('has a valid schema <script> tag', async () => {
            let schema = await driver.findElement(
              By.xpath('//script[@type=\'application/ld+json\']'))
                                     .getAttribute('innerText')
            // Since this is test mode, all the urls are localhost, replace that with bikeva.com
            schema = await schema.replace(
              'http://localhost:3000',
              'https://bikeva.com')

            let res = await request({
              uri: googleDataValidator,
              method: 'POST',
              formData: {
                html: await schema
              },
              resolveWithFullResponse: true
            })

            // Strip out weird beginning characters Google added for some reason
            // @formatter:off
          res.body = await res.body.replace(")]}'", '')
          // @formatter:on
            const resObj = JSON.parse(await res.body)

            expect(await res.statusCode)
              .to.equal(200)

            if (resObj.totalNumErrors > 0) {
              console.log(resObj.errors)
            }
            expect(await resObj.totalNumErrors)
              .to.equal(0)
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

            if (!route.startsWith('results')) {
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
              it('should have events button', async () => {
                // wait for animation to finish
                let button = await driver.wait(until.elementLocated(
                  By.id('events-button')))

                expect(await button.getAttribute('innerHTML'))
                  .to.contain('EVENTS')

                expect(await button.getAttribute('href'))
                  .to.equal('https://www.facebook.com/pg/bikevirginia/events/')
              })
            }
          })
        })

        describe('<social-links> test', () => {
          if (route === '/') {
            describe('<home> social links test', () => {

            })
          } else if (!route.includes('results') &&
                     routes === 'xxc-va-race-series/2018') { // TODO: add social links to results
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

        //
        if (process.env.BROWSER === 'chrome') {
          describe('<img> tests', () => {
            const notFoundLogString = 'Failed to load resource: the server responded with a status of 404 (Not Found)'
            const widths = [
              1280,
              720,
              480
            ]

            for (const width of widths) {
              describe(`${width} width`, () => {
                before(async () => {
                  await driver.manage().window().setRect({
                    width: width - 20,
                    height: 1024
                  })
                  await driver.get(url)
                })

                it('should not have any broken <img>s', async () => {
                  const imgs = await driver.findElements(
                    By.css('img'))
                  for (const img of await imgs) {
                    await driver.executeScript('arguments[0].scrollIntoView(true);', img)
                    await driver.wait(() => {
                      return driver.executeScript('return arguments[0].complete', img)
                    })

                    let notFounds = await driver.manage().logs().get('browser')
                    notFounds = await notFounds.filter(logs => {
                      return logs.message.includes(notFoundLogString)
                    })

                    if (notFounds.length > 0) {
                      console.log(notFounds)
                    }
                    expect(await notFounds.length)
                      .to.equal(0)
                  }
                })
              })
            }
          })
        }
      })
    }

    after(async () => {
      await driver.get(testUrl)
    })
  })
}