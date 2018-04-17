import { headTags, buildVideo } from '../functions'
import { s3Pages } from '../../scripts/routes'

export default {
  async asyncData(context) {
    await context.store.dispatch('loadPosts', [
      context.route.name
    ])
    await context.store.dispatch('loadPosts',
      context.store.getters.getPost(context.route.name).relatedPosts
    )

    const postInstance = {
      post: context.store.getters.getPost(context.route.name),
      relatedPosts: context.store.getters.getPosts(
        context.store.getters.getPost(context.route.name).relatedPosts
      ),
      img: `${s3Pages}/${context.route.name}/`
    }

    const post = context.store.getters.getPost(context.route.name)
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