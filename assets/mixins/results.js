import { results } from "../../assets/head-tags"
import { headTags } from "../../assets/functions"

export default {
  head() {
    let ogImage
    if (this.$route.name === "results-battle-at-blackhorse-2018") {
      ogImage = "P1010117.jpg"
    } else if (this.$route.name === "results-middle-mountain-momma-2018") {
      ogImage = "connor-bell-dab.jpg"
    } else {
      ogImage = "podium.jpg"
    }

    return headTags(results.title, results.description, results.keywords, {
      ogImage: ogImage,
      route: this.$route.path.substring(1)
    })
  }
}
