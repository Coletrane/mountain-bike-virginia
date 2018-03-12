import Vuex from 'vuex'
import misc from './misc'
import authors from './authors'
import posts from './posts'

export default () => {
  return new Vuex.Store({
    modules: {
      misc,
      authors,
      posts
    },
    strict: true
  })
}
