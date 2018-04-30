import {results} from "../../assets/head-tags"
import {headTags} from "../../assets/functions"

export default {
  head() {
    let imgRoute
    if (this.$route.name === 'results-battle-at-blackhorse-2018') {
      imgRoute = 'results/P1010117.jpg'
    } else {
      imgRoute = 'results/podium.jpg'
    }

    return headTags(
      results.title,
      results.description,
      results.keywords,
      {
        imgRoute: imgRoute,
        route: this.$route.path.substring(1),
      }
    )
  }
}