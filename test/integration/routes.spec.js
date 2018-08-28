import { routes, posts } from "../../scripts/dev/build-routes-json"

const fs = require("fs")

let routesToTest
if (process.env.JUST_ONE) {
  routesToTest = routes.filter(route => {
    if (route === "middle-mt-momma-2018") {
      return route
    }
  })
} else {
  routesToTest = routes
}

module.exports = browser => {
  let global
  if (browser) {
    global = require(`./global.${browser}.spec`)
  } else {
    global = require(`./global.chrome.spec`)
  }
  const By = require("selenium-webdriver").By
  const until = require("selenium-webdriver").until
  const request = require("request-promise")

  const googleDataValidator =
    "https://search.google.com/structured-data/testing-tool/validate"

  describe("routes tests", () => {
    let driver
    let expect
    let testUrl

    before(async () => {
      driver = await global.driver
      expect = await global.expect
      testUrl = await global.testUrl
    })

    for (let route of routesToTest) {
      if (route.endsWith("/") && route !== "/") {
        route = route.slice(0, route.length - 1)
      }
      describe(route, () => {
        let url
        let post

        before(async () => {
          if (route === "/") {
            url = await testUrl
          } else {
            url = await `${testUrl}/${route}`
          }
          post = posts.find(post => post.route === route)
          await driver.get(url)
          await driver.sleep(1000)
        })
        describe("<head> tests", () => {
          it("should navigate to route", async () => {
            try {
              const res = await request({
                uri: url,
                resolveWithFullResponse: true
              })
              expect(res.statusCode).to.equal(200)
            } catch (err) {
              expect(false).to.be.true
            }
          })

          it("has title", async () => {
            let title = await driver.findElement(By.css("title"))
            expect(await title).not.to.be.undefined
          })

          it("has keywords", async () => {
            let keywords = await driver.findElement(
              By.xpath("//meta[@name='keywords']")
            )
            expect(await keywords).not.to.be.undefined
          })

          it("has viewport", async () => {
            expect(
              await driver
                .findElement(By.xpath("//meta[@name='viewport']"))
                .getAttribute("content")
            ).not.to.be.undefined
          })

          it("has robots", async () => {
            expect(
              await driver
                .findElement(By.xpath("//meta[@name='robots']"))
                .getAttribute("content")
            ).to.equal("index, follow")
          })

          it("has revisit-after", async () => {
            expect(
              await driver
                .findElement(By.xpath("//meta[@name='revisit-after']"))
                .getAttribute("content")
            ).to.equal("1 week")
          })

          it("has fb:app_id", async () => {
            expect(
              await driver
                .findElement(By.xpath("//meta[@property='fb:app_id']"))
                .getAttribute("content")
            ).to.equal("1426359417419881")
          })

          describe("og:image", () => {
            let ogImage

            before(async () => {
              ogImage = await driver
                .findElement(By.xpath("//meta[@property='og:image']"))
                .getAttribute("content")
            })

            it("has og:image meta tag", async () => {
              expect(ogImage.endsWith("undefined")).to.be.false
              expect(ogImage.endsWith(".jpg") || ogImage.endsWith(".png")).to.be
                .true
            })

            it('can "GET" og:image url', async () => {
              let imgPath = ogImage.replace("http://localhost:3000/", "../")
              expect(fs.existsSync(imgPath)).to.be.true
            })
          })

          it("has og:title", async () => {
            expect(
              await driver
                .findElement(By.xpath("//meta[@property='og:title']"))
                .getAttribute("content")
            ).not.to.be.undefined
          })

          it("has og:description", async () => {
            expect(
              await driver.findElement(
                By.xpath("//meta[@property='og:description']")
              )
            ).not.to.be.undefined
          })

          it("has og:url", async () => {
            let expected
            if (route === "/") {
              expected = `https://bikeva.com/`
            } else if (route.endsWith("/")) {
              expected = `https://bikeva.com/${route}`
            } else {
              expected = `https://bikeva.com/${route}/`
            }
            expect(
              await driver
                .findElement(By.xpath("//meta[@property='og:url']"))
                .getAttribute("content")
            ).to.equal(expected)
          })

          it("has a valid schema <script> tag", async () => {
            let schema = await driver
              .findElement(By.xpath("//script[@type='application/ld+json']"))
              .getAttribute("innerText")

            expect(await schema).not.to.be.undefined
          })
        })

        describe("<social-links> test", () => {
          if (route === "/") {
            describe("<home> social links test", () => {})
          } else if (
            !route.includes("results") &&
            routes === "xxc-va-race-series/2018"
          ) {
            // TODO: add social links to results
            describe(`${route} social links test`, () => {
              let social
              let links
              let hrefs = []

              const testLinksValid = async href => {
                console.log(`test validity: ${href}`)
                it("should not include undefined", async () => {
                  expect(await href.includes("undefined")).to.be.false
                })

                it("should not end with //", async () => {
                  expect(await href.endsWith("//")).to.be.false
                })

                it("should include bikeva.com", async () => {
                  expect(await href.includes(routes.baseUrl)).to.be.true
                })

                // TODO: GET the links
              }

              before(async () => {
                social = await driver.findElement(By.className("social"))

                links = await social.findElements(By.css("a"))

                for (const link of await links) {
                  hrefs.push(await link.getAttribute("href"))
                }
              })

              it("should have 3 links", async () => {
                expect(await links.length).to.equal(3)
              })

              it("should have valid links", async () => {
                for (const href of await hrefs) {
                  if (href.includes("facebook")) {
                    testLinksValid(href)
                  } else if (href.includes("reddit")) {
                    testLinksValid(href)
                  } else if (href.includes("twitter")) {
                    testLinksValid(href)
                  }
                }
              })
            })
          }
        })

        describe("<quote> test", () => {
          let quotes
          before(async () => {
            quotes = await driver.findElements(By.className("quote-text"))
          })

          it("should have text if it has quote components", async () => {
            for (const quote of await quotes) {
              expect(await quote.getAttribute("innerText")).not.to.be.undefined
            }
          })
        })

        // TODO fix this
        // if (browser === 'chrome') {
        //   describe('<img> tests', () => {
        //     const notFoundLogString = 'Failed to load resource: the server responded with a status of 404 (Not Found)'
        //     const widths = [
        //       1280,
        //       720,
        //       480
        //     ]
        //
        //     for (const width of widths) {
        //       describe(`${width} width`, () => {
        //         before(async () => {
        //           await driver.manage().window().setRect({
        //             width: width - 20,
        //             height: 1024
        //           })
        //           await driver.get(url)
        //           await driver.sleep(1000)
        //         })
        //
        //         it('should not have any broken <img>s', async () => {
        //           const imgs = await driver.findElements(
        //             By.css('img'))
        //           for (const [i, img] of await imgs.entries()) {
        //             await driver.executeScript('arguments[0].scrollIntoView(true);', img)
        //             await driver.wait(() => {
        //               return driver.executeScript('return arguments[0].complete', img)
        //             })
        //
        //             let notFounds = await driver.manage().logs().get('browser')
        //             notFounds = await notFounds.filter(logs => {
        //               return logs.message.includes(notFoundLogString)
        //             })
        //
        //             if (i === await imgs.length - 1) {
        //               await driver.sleep(1000)
        //             }
        //
        //             if (notFounds.length > 0) {
        //               console.log(notFounds)
        //             }
        //             expect(await notFounds.length)
        //               .to.equal(0)
        //           }
        //         })
        //       })
        //     }
        //   })
        // }
      })
    }

    after(async () => {
      await driver.get(testUrl)
    })
  })
}
