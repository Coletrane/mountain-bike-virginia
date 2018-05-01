import {results} from "../../assets/head-tags"
import {headTags} from "../../assets/functions"
import {s3Pages} from '../../scripts/routes'

export default {
  head() {
    let ogImage
    if (this.$route.name === 'results-battle-at-blackhorse-2018') {
      ogImage = 'P1010117.jpg'
    } else {
      ogImage = 'podium.jpg'
    }

    return headTags(
      results.title,
      results.description,
      results.keywords,
      {
        ogImage: `${s3Pages}/results/${ogImage}`,
        route: this.$route.path.substring(1),
      }
    )
  }
}