import Vuex from "vuex"
import misc from "./misc"
import authors from "./authors"
import posts, { PostState } from "./posts"
import results from "./results"
import das from "./das"

export class MTBVAState {
  posts: PostState
}

export default () => {
  return new Vuex.Store({
    modules: {
      misc,
      authors,
      posts,
      results,
      das
    },
    strict: true
  })
}
