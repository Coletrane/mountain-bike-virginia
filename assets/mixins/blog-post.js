import { headTags, buildVideo } from '../functions'
import { s3Pages } from '../../scripts/routes'

export default {
  async asyncData(context) {
    const route = context.route.path.slice(1)
    await context.store.dispatch('loadPosts', [
      route
    ])
    await context.store.dispatch('loadPosts',
      context.store.getters.getPost(route).relatedPosts
    )

    const postInstance = {
      post: context.store.getters.getPost(route),
      relatedPosts: context.store.getters.getPosts(
        context.store.getters.getPost(route).relatedPosts
      ),
      img: `${s3Pages}/${route}/`
    }

    const post = context.store.getters.getPost(route)
    if (post.ytSrc) {
      postInstance.schema = await buildVideo(post)
    }

    return postInstance
  },
  head() {
    if (this.post) {
      if (this.schema) {
        return {
          ...headTags(
            this.post.title,
            this.post.subtitle,
            this.post.keywords,
            this.post
          ),
          script: this.schema
        }
      } else {
        return headTags(
          this.post.title,
          this.post.subtitle,
          this.post.keywords,
          this.post
        )
      }
    }
  }
}