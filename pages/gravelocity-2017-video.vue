<template>
  <div>
    <blog-post :header-height="900"
               :image="image"
               :post="post"
               header-author
               :related-posts="relatedPosts">
      <div slot="content">
        <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import Youtube from '../components/Iframes/Youtube'

  import {s3Pages} from '../scripts/routes'
  import {
    headTags,
    buildVideo
  } from '../assets/functions'

  export default {
    name: 'gravelocity-2017-video',
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context) {
      let post = await context.store.dispatch('loadPosts', [
        gravelocity2017Video
      ])
      return {
        schema: await buildVideo(post),
        post: post,
        relatedPosts: await context.store.dispatch('loadPosts', [
          gravelocity2018,
          'middle-mt-momma-2018'
        ])
      }
    },
    head() {
      if (this.post && this.schema) {
        return {
          ...headTags(
            this.post.title,
            "Yearly gravel ride in January that starts from Gravel Dr in Daleville and goes to the top of the Blue Ridge Parkway",
            "gravel, gravel bike, adventure bike, bike, ride, winter, blue ridge parkway, parkway, virginia, blue ridge, endurance, bikepacking, road bike, cycling, cyclocross, cross, cx bike",
            this.post),
          script: this.schema
        }
      }
    },
    data() {
      return {
        image: `${s3Pages}/${gravelocity2017Video}/${imgRoutes[gravelocity2017Video]}`
      }
    }
  }
</script>
