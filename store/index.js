import Vuex from 'vuex'
import misc from './misc'
import authors from './authors'
import posts from './posts'
import results from './results'
import routes from './routes'
import das from './das'

export default () => {
  return new Vuex.Store({
    modules: {
      misc,
      authors,
      posts,
      results,
      routes,
      das
    },
    strict: true
  })
}
