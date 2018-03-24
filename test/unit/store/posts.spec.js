// FIXME: https://github.com/nuxt/nuxt.js/issues/1774
import {actions, getters, state} from '../../../store/posts'

const expect = require('./global.spec').expect

describe('posts store test', () => {
  it('getPosts() basic', async () => {
    let post = actions.loadPosts({})
  })
})
