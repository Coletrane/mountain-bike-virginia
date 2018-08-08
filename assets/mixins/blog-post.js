import { headTags, buildVideo, getRoute } from "../functions"
import { s3Pages } from "../../scripts/routes"

export default {
  async asyncData(context) {
    let route = getRoute(context.route.matched)

    await context.store.dispatch("loadPosts", [route])
    const currentPost = context.store.getters.posts(route)

    await context.store.dispatch("loadPosts", currentPost.relatedPosts)
    let relatedPosts = context.store.getters.posts(currentPost.relatedPosts)
    if (!Array.isArray(relatedPosts)) {
      relatedPosts = [relatedPosts]
    }

    const postInstance = {
      post: currentPost,
      relatedPosts: relatedPosts,
      img: `${s3Pages}/${route}/`
    }

    if (currentPost.ytSrc) {
      postInstance.schema = await buildVideo(currentPost)
    }

    return postInstance
  },
  head() {
    if (!this.postAtBottom && this.post) {
      this.realPost = this.post
      return this.blogHeadTags(this.post)
    } else {
      return this.blogHeadTags(
        this.$store.getters.posts(getRoute(this.$route.matched))
      )
    }
  },
  props: {
    // This is for when it is a related post
    postAtBottom: {
      type: Object,
      required: false
    }
  },
  created() {
    if (this.postAtBottom) {
      this.post = this.postAtBottom
      this.relatedPosts = []
      this.img = `${s3Pages}/${this.post.route}/`
    } else {
      this.$store.dispatch("setCurrentPost", this.post)
    }
  },
  methods: {
    blogHeadTags(post) {
      if (this.schema) {
        return {
          ...headTags(post.title, post.subtitle, post.keywords, post),
          script: this.schema
        }
      } else {
        return headTags(post.title, post.subtitle, post.keywords, post)
      }
    }
  }
}
