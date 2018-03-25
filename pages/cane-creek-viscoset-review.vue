<template>
  
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'

  import {
    s3Pages,
    caneCreekViscosetReview,
    dtSwiss54tRatchetReview,
    pivotSwitchbladeReview
  } from '../scripts/routes'
  import {headTags} from '../assets/functions'

  export default {
    name: 'cane-creek-viscoset-review',
    components: {
      BlogImage,
      BlogPost
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          caneCreekViscosetReview
        ]),
        relatedPosts: [
          await context.store.dispatch('loadPosts', [
            dtSwiss54tRatchetReview,
            pivotSwitchbladeReview
          ])
        ]
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          'cane creek, headset, forty, viscoset, e-bike, mountain bike, parts, head, bearing, enduro, review',
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${caneCreekViscosetReview}/`
      }
    }
  }
</script>
