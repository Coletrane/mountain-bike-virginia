import {headTags, buildVideo} from '../functions'
import {s3Pages} from '../../scripts/routes'

export default {
  async asyncData(context) {
    const route = context.route.path.slice(1)
    await context.store.dispatch('loadPosts', [
      route
    ])
    const currentPost = context.store.getters.getPost(route)
    context.store.dispatch('setCurrentPost', currentPost.route)

    await context.store.dispatch('loadPosts',
      currentPost.relatedPosts
    )

    const postInstance = {
      post: currentPost,
      relatedPosts: context.store.getters.getPosts(
        currentPost.relatedPosts
      ),
      img: `${s3Pages}/${route}/`
    }

    if (currentPost.ytSrc) {
      postInstance.schema = await buildVideo(currentPost)
    }

    return postInstance
  },
  head() {
    const currentPost = this.$store.getters.getPost(
      this.$store.state.posts.currentPost)
    if (currentPost) {
      if (this.schema) {
        return {
          ...headTags(
            currentPost.title,
            currentPost.subtitle,
            currentPost.keywords,
            currentPost
          ),
          script: this.schema
        }
      } else {
        return headTags(
          currentPost.title,
          currentPost.subtitle,
          currentPost.keywords,
          currentPost
        )
      }
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
    }
  }
}