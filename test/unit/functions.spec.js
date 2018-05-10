// Use import when working with ES6 modules
import { headTags } from '../../assets/functions'

const expect = require('./global.spec').expect

let head = headTags(
  'title',
  'description',
  'keywords',
  {
    ...require('../../json/posts/creature-2017-recap'),
    route: 'creature-2017-recap'
  }
)

describe('headTags tests', () => {
  it('should have a title tag', () => {
    expect(head.title)
      .to.equal('title')
  })

  describe('meta tags test', () => {
    head.meta.forEach((meta, i, arr) => {
      let content = head.meta[i].content
      if (meta.name === 'description') {
        it('should have description', () => {
          expect(content)
            .to.equal('description')
        })
      }

      if (meta.name === 'keywords') {
        it('should have keywords', () => {
          expect(content)
            .to.equal('keywords')
        })
      }

      if (meta.property === 'og:title') {
        it('should have og:title', () => {
          expect(content)
            .to.equal('title')
        })
      }

      if (meta.property === 'og:description') {
        it('should have og:description', () => {
          expect(content)
            .to.equal('description')
        })
      }

      if (meta.property === 'og:type') {
        it('should have og:type', () => {
          expect(content)
            .not.to.be.undefined
        })
      }

      if (meta.property === 'og:url') {
        it('should have og:url', () => {
          expect(content.length > 0)
            .to.be.true
        })
      }

      if (meta.property === 'og:image') {
        it('should have og:image', () => {
          expect(content.length > 0)
            .to.be.true
        })
      }
    })

    describe('child route headTags test', () => {
      let childHeadTags = headTags(
        'title',
        'description',
        'keywords',
        {
          imgRoute: 'foliage.jpg',
          route: 'results-middle-mountain-momma-2018'
        })

      it('should have the correct og:image', () => {
        let ogImage = childHeadTags.meta.filter(tag => tag.property === 'og:image')[0]

        expect(ogImage.content.endsWith('.jpg'))
          .to.be.true
      })
    })
  })
})
