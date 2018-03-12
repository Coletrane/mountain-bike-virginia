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

  import {s3Pages, gravelocity2017Video, imgRoutes} from '../scripts/routes'
  import {posts} from '../assets/posts'
  import {headTags, buildVideo} from '../assets/functions'

  const post = posts.gravelocity2017Video

  export default {
    name: 'gravelocity-2017-video',
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context) {
      return {
        schema: await buildVideo(post)
      }
    },
    head() {
      let head = {
        ...headTags(
          post.title,
          "Yearly gravel ride in January that starts from Gravel Dr in Daleville and goes to the top of the Blue Ridge Parkway",
          "gravel, gravel bike, adventure bike, bike, ride, winter, blue ridge parkway, parkway, virginia, blue ridge, endurance, bikepacking, road bike, cycling, cyclocross, cross, cx bike",
          post
        )
      }
      if (this.schema) {
        head.script = this.schema
      }
      return head
    },
    data() {
      return {
        image: `${s3Pages}${gravelocity2017Video}/${imgRoutes[gravelocity2017Video]}`,
        post: post,
        relatedPosts: [
          posts.gravelocity2018,
          posts.middleMtMomma2018
        ]
      }
    }
  }
</script>

<style scoped>

</style>