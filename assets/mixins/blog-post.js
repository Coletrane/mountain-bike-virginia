import {headTags, buildVideo} from '../functions'
import {s3Pages} from '../../scripts/routes'

export default {
  async asyncData(context) {
    let route
    if (context.route.matched.length === 1) {
      route = context.route.matched[0].path.slice(1)
    } else {
      throw new Error (`${route.name} route.matched has nothing!`)
    }

    await context.store.dispatch('loadPosts', [
      route
    ])
    const currentPost = context.store.getters.getPost(route)

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
    if (!this.postAtBottom &&
        this.post) {
      this.realPost = this.post
      return this.blogHeadTags(this.post)
    } else {
      let route
      if (this.$route.matched.length === 1) {
        route = this.$route.matched[0].path.slice(1)
      } else {
        throw new Error (`${route.name} route.matched has nothing!`)
      }

      return this.blogHeadTags(this.$store.getters.getPost(route))
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
      this.$store.dispatch('setCurrentPost', this.post)
    }
  },
  methods: {
    blogHeadTags(post) {
      if (this.schema) {
        return {
          ...headTags(
            post.title,
            post.subtitle,
            post.keywords,
            post
          ),
          script: this.schema
        }
      } else {
        return headTags(
          post.title,
          post.subtitle,
          post.keywords,
          post
        )
      }
    }
  }
}