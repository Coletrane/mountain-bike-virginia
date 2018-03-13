// FIXME: https://github.com/nuxt/nuxt.js/issues/1774
import {
  state,
  actions,
  getters
} from '../../../store/posts'
import * as routes from '../../../scripts/routes'

const expect = require('./global.spec').expect

describe('posts store test', () => {
  it('getPosts() basic', async () => {
    let post = actions.loadPosts({})
  })
})