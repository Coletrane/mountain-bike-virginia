import { postDirs } from "../constants"
import { s3Pages } from "../routes"

export default {
  components: {
    PostCard: () => import(/*webpackChunkName:'promo-card-components'*/"../components/Card/PostCard"),
    ImageLink: () => import(/*webpackChunkName:'promo-card-components'*/"../components/Images/ImageLink"),
    Youtube: () => import(/*webpackChunkName:'promo-card-components'*/"../components/Iframes/Youtube")
  },
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
