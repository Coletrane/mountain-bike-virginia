import Vuex from 'vuex'
import misc from './misc'
import authors from './authors'
import posts from './posts'
import results from './results'

export default () => {
  return new Vuex.Store({
    modules: {
      misc,
      authors,
      posts,
      results
    },
    strict: true
  })
}
