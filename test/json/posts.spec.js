import { posts } from "../../scripts/dev/build-routes-json"
import { schemaTypes } from "../../scripts/client/schmea-types"

const expect = require("./global.spec").expect
const glob = require("glob")

// Sort posts alphabetically
posts.sort((a, b) => {
  if (a.route < b.route) {
    return -1
  }
  if (a.route > b.route) {
    return 1
  }
  return 0
})

describe("/posts/ test", () => {
  let postsJson = []

  before(() => {
    const files = glob.sync("json/posts/**/*.json")
    files.forEach(file => {
      let filename = file.replace("json/posts/", "")
      filename = filename.replace(".json", "")

      postsJson.push({
        filename: filename,
        json: require("../../" + file)
      })
    })

    // Sort json files alphabetically
    postsJson.sort((a, b) => {
      if (a.filename < b.filename) {
        return -1
      }
      if (a.filename > b.filename) {
        return 1
      }
      return 0
    })
  })

  for (const [i, post] of posts.entries()) {
    if (
      post.route !== "relaunch" &&
      post.route !== "creature-2016" &&
      !post.route.startsWith("external")
    ) {
      describe(post.route, () => {
        let postJson
        before(async () => {
          postJson = await postsJson[i]
        })

        it("posts and postsJson should be in sync", async () => {
          expect(await postJson.filename).to.equal(post.route)
        })

        it("should have a title", async () => {
          await postJson.json
          expect(postJson.json.title).not.to.be.undefined
          expect(postJson.json.title).not.to.equal("")
        })

        it("should have a subtitle", async () => {
          await postJson.json
          expect(postJson.json.subtitle).not.to.be.undefined
          expect(postJson.json.subtitle).not.to.equal("")
        })

        it("should have an author", async () => {
          await postJson.json
          expect(postJson.json.author).not.to.be.undefined
          expect(postJson.json.author).not.to.equal("")
        })

        describe("date", () => {
          it("should have a date", async () => {
            await postJson.json
            expect(postJson.json.date).not.to.be.undefined
            expect(postJson.json.date).not.to.equal("")
          })

          it("should be able to new Date()", async () => {
            expect(new Date(await postJson.json.date)).not.to.equal(
              "Invalid Date"
            )
          })
        })

        it("should have a loc if its not a review", async () => {
          const schema = await postJson.json.schema
          if ((schema && schema.type !== "Review") || !schema) {
            expect(postJson.json.loc).not.to.be.undefined
            expect(postJson.json.loc).not.to.equal("")
          }
        })

        it("should have a description", async () => {
          await postJson.json

          expect(postJson.json.description).not.to.be.undefined
          expect(postJson.json.description).not.to.equal("")
        })

        it("should have an imgRoute", async () => {
          await postJson.json

          expect(postJson.json.imgRoute).not.to.be.undefined
          expect(postJson.json.imgRoute).not.to.equal("")
          expect(postJson.json.imgRoute.startsWith('"')).to.be.false
          expect(postJson.json.imgRoute.endsWith('"')).to.be.false
        })

        describe("related posts", () => {
          it("should have relatedPosts", async () => {
            await postJson.json
            expect( postJson.json.relatedPosts).not.to.be.undefined
            expect( postJson.json.relatedPosts).not.to.equal([])
            expect( postJson.json.relatedPosts).not.to.equal("")
          })

          it("should have valid relatedPosts", async () => {
            for (const relatedPost of await postJson.json.relatedPosts) {
              let foundPost = await postsJson.find(postJ => {
                return postJ.filename === relatedPost
              })
              if (!foundPost) {
                console.log(`Could not find: ${relatedPost}`)
              }

              expect(foundPost).not.to.be.undefined

              expect(foundPost).not.to.equal("")
            }
          })
        })

        it("should have keywords", async () => {
          await postJson.json
          expect( postJson.json.keywords).not.to.be.undefined
          expect( postJson.json.keywords).not.to.equal("")
        })

        describe("schema test", () => {
          it("should have a schema if no ytSrc", async () => {
            await postJson.json
            if (
              !postJson.json.ytSrc &&
              post.route !== "events/creature-from-carvins-cove-2018"
            ) {
              expect(postJson.json.schema).not.to.be.undefined

              expect(postJson.json.schema).not.to.equal("")
            }
          })

          it("should have a valid schema type", async () => {
            await postJson.json
            if (
              !postJson.json.ytSrc &&
              post.route !== "events/creature-from-carvins-cove-2018"
            ) {
              const schemaType = Object.keys(schemaTypes).find(type => {
                return schemaTypes[type] === postJson.json.schema.type
              })

              expect(schemaType).not.to.be.undefined
            }
          })

          it("should not have a schema if ytSrc", async () => {
            await postJson.json
            if (postJson.json.ytSrc) {
              expect(postJson.json.schema).to.be.undefined

              expect(postJson.json.schema).not.to.equal("")
            }
          })

          it("should have itemReviewed if is a review", async () => {
            await postJson.json
            if (
              postJson.json.schema &&
              postJson.json.schema.type === schemaTypes.review
            ) {
              expect(postJson.json.schema.itemReviewed).not.to.be.undefined
              expect(postJson.json.schema.itemReviewed.brand).not.to.be
                .undefined
              expect(postJson.json.schema.itemReviewed.model).not.to.be
                .undefined
            }
          })

          it("should have reviewRating if it is a review", async () => {
            await postJson.json
            if (
              postJson.json.schema &&
              postJson.json.schema.type === schemaTypes.review
            ) {
              expect(postJson.json.schema.reviewRating).not.to.be.undefined
              expect(postJson.json.schema.reviewRating.ratingValue).not.to.be
                .undefined
              expect(postJson.json.schema.reviewRating.bestRating).not.to.be
                .undefined
              expect(postJson.json.schema.reviewRating.worstRating).not.to.be
                .undefined
            }
          })
        })
      })
    }
  }
})
