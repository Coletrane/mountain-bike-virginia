<template>
  <div>
    <blog-post :header-height="900"
               :image="img + ''"
               :post="post"
               :related-posts="relatedPosts">
      <div slot="content">

      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'

  import {
    s3Pages, guerrillaGravityPedalheadReview, dtSwiss54tRatchetReview,
    caneCreekViscosetReview
  } from '../scripts/routes'
  import {headTags} from '../assets/functions'

  export default {
    name: 'guerrilla-gravity-pedalhead-review',
    components: {
      BlogPost,
      BlogImage
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          guerrillaGravityPedalheadReview
        ]),
        relatedPosts: await context.store.dispatch('loadPosts', [
          dtSwiss54tRatchetReview,
          caneCreekViscosetReview
        ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          'bike, pedalhead, hardtail, xc, dirt jump, slack, 27.5 plus, 29er, trail, enduro, cross country, aluminum',
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${guerrillaGravityPedalheadReview}/`
      }
    }
  }
</script>
