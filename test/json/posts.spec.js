import { posts } from '../../scripts/build-routes-json'

const expect = require('./global.spec').expect
const glob = require('glob')

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

describe('/posts/ test', () => {
  let postsJson = []

  before(() => {
    const files = glob.sync('json/posts/*.json')
    files.forEach(file => {
      let filename = file.split('/')
      filename = filename[filename.length - 1]
      filename = filename.replace('.json', '')

      postsJson.push({
        filename: filename,
        json: require('../../' + file)
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
    if (post.route !== 'relaunch' && post.route !== 'creature-2016') {
      describe(post.route, () => {
        let postJson
        before(async () => {
          postJson = await postsJson[i]
        })

        it('posts and postsJson should be in sync', async () => {
          expect(await postJson.filename)
            .to.equal(post.route)
        })

        it('should have a title', async () => {
          expect(await postJson.json.title)
            .not.to.be.undefined

          expect(await postJson.json.title)
            .not.to.equal('')
        })

        it('should have a subtitle', async () => {
          expect(await postJson.json.subtitle)
            .not.to.be.undefined

          expect(await postJson.json.subtitle)
            .not.to.equal('')
        })

        it('should have an author', async () => {
          expect(await postJson.json.author)
            .not.to.be.undefined

          expect(await postJson.json.author)
            .not.to.equal('')
        })

        describe('date', () => {
          it('should have a date', async () => {
            expect(await postJson.json.date)
              .not.to.be.undefined

            expect(await postJson.json.date)
              .not.to.equal('')
          })

          it('should be able to new Date()', async () => {
            expect(new Date(await postJson.json.date))
              .not.to.equal('Invalid Date')
          })
        })

        it('should have a loc if its not a review', async () => {
          const schema = await postJson.json.schema
          if ((schema && schema.type !== 'Review') ||
              !schema) {
            expect(await postJson.json.loc)
              .not.to.be.undefined

            expect(await postJson.json.loc)
              .not.to.equal('')
          }
        })

        it('should have a description', async () => {
          expect(await postJson.json.description)
            .not.to.be.undefined

          expect(await postJson.json.description)
            .not.to.equal('')
        })

        it('should have an imgRoute', async () => {
          expect(await postJson.json.imgRoute)
            .not.to.be.undefined

          expect(await postJson.json.imgRoute)
            .not.to.equal('')
        })

        describe('related posts', () => {
          it('should have relatedPosts', async () => {
            expect(await postJson.json.relatedPosts)
              .not.to.be.undefined

            expect(await postJson.json.relatedPosts)
              .not.to.equal([])

            expect(await postJson.json.relatedPosts)
              .not.to.equal('')
          })

          it('should have valid relatedPosts', async () => {
            for (const relatedPost of await postJson.json.relatedPosts) {
              let foundPost = await postsJson.find(postJ => {
                return postJ.filename === relatedPost
              })
              if (!foundPost) {
                console.log(`Could not find: ${relatedPost}`)
              }

              expect(foundPost)
                .not.to.be.undefined

              expect(foundPost)
                .not.to.equal('')
            }
          })
        })

        it('should have keywords', async () => {
          expect(await postJson.json.keywords)
            .not.to.be.undefined

          expect(await postJson.json.keywords)
            .not.to.equal('')
        })

        describe('schema test', () => {
          it('should have a schema if no ytSrc', async () => {
            if (!(await postJson.json.ytSrc)) {
              expect(await postJson.json.schema)
                .not.to.be.undefined

              expect(await postJson.json.schema)
                .not.to.equal('')
            }
          })

          it('should not have a schema if ytSrc', async () => {
            if (await postJson.json.ytSrc) {
              expect(await postJson.json.schema)
                .to.be.undefined

              expect(await postJson.json.schema)
                .not.to.equal('')
            }
          })
        })

      })
    }
  }
})