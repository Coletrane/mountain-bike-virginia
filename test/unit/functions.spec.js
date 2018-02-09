const fns = require('../../assets/functions')
const expect = require('./global.spec').expect
const posts = require('../../assets/posts')

describe('functions.js tests', () => {
  describe('headTags tests', () => {
    let head

    before(() => {
      head = fns.headTags(posts.creature2017Recap)
    })

    it('should have a title tag', () => {
      expect(head.title.length > 0)
        .to.be.true
    })

    describe('meta tags test', () => {
      Object.keys(head.meta).forEach((tag) => {
        if (tag === 'description') {
          it('should have description', () => {
            expect(head.meta[tag].length > 0)
              .to.be.true
          })
        }

        if (tag === 'keywords') {
          it('should have keywords', () => {
            epxect(head.meta[tag].length > 0)
              .to.be.true
          })
        }
      })
    })
  })
})
