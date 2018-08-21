import { postDirs } from "../constants"
import { s3Pages } from "../routes"

export default {
  data() {
    const post = this.$store.getters.posts(this.componentRoute())
    return {
      post: post,
      img: `${s3Pages}/${post.route}/`
    }
  },
  methods: {
    componentRoute() {
      let componentRoute = ""
      let nameSplit = this.$options.name.split("-")
      if (postDirs.find(dir => dir === nameSplit[0])) {
        componentRoute = `${nameSplit[0]}/`
        nameSplit.splice(0, 1)
      }
      componentRoute += nameSplit.join("-")
      componentRoute = componentRoute.replace("-promo", "")
      return componentRoute
    }
  }
}
