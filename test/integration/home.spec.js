import { numPages } from "../../store/posts"
import { posts } from "../../scripts/build-routes-json"

module.exports = browser => {
  const global = require(`./global.${browser}.spec`)
  const By = require("selenium-webdriver").By

  describe("<home> tests", () => {
    let driver
    let expect
    let cards

    before(async () => {
      driver = await global.driver
      expect = await global.expect

      for (const [i, post] of posts.entries()) {
        await driver.executeScript(`scroll(0,${i * 3000});`)
      }

      cards = await driver.findElements(By.className("card-container"))
    })

    it(`should have ${posts.length} posts`, async () => {
      expect(cards.length === posts.length).to.be.true
    })

    for (const [i, post] of posts.entries()) {
      it("should have a headline", async () => {
        expect(await cards[i].findElement(By.className("headline")).getText())
          .not.to.be.undefined
      })

      it("should have a subheading", async () => {
        expect(await cards[i].findElement(By.className("subheading")).getText())
          .not.to.be.undefined
      })

      if (
        post.route !== "relaunch" &&
        post.route !== "creature-2016" &&
        !post.route.startsWith("external")
      ) {
        it("should have a link around the headline and subheading", async () => {
          let href = await cards[i]
            .findElement(By.css("a"))
            .getAttribute("href")

          expect(href.length > 0).to.be.true
        })
      }

      describe("<post-card> <social-actions> test", () => {
        let social

        before(async () => {
          social = await cards[i].findElement(By.className("social"))
        })

        it("should have <social-actions>", async () => {
          expect(await social).not.to.be.undefined
        })

        describe("<social-actions> link validity test", () => {
          let links

          before(async () => {
            links = await social.findElements(By.css("a"))
          })

          it("should have 3 links", async () => {
            expect(await links.length).to.equal(3)
          })

          const linkTypes = ["facebook", "reddit", "twitter"]
          for (const [j, link] of linkTypes.entries()) {
            it(`should have a valid ${link} link`, async () => {
              let href = await links[j].getAttribute("href")
              console.log(href)

              expect(href.includes("undefined")).to.be.false

              expect(href.endsWith("//")).to.be.false

              expect(href.includes("https://bikeva.com/")).to.be.true
            })
          }
        })
      })

      it("should have a media section", async () => {
        expect(await cards[i].findElement(By.className("mtbva-media"))).not.to
          .be.undefined
      })
    }
  })
}
