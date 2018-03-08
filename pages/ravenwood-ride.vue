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

  import {s3Pages, ravenwoodRide} from '../scripts/routes'
  import {posts} from '../assets/posts'
  import {headTags, buildVideo} from '../assets/functions'

  const post = posts.ravenwoodRide

  export default {
    name: 'ravenwood-ride',
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
          "Road Bike Ride on Ravenwood Abbandoned Golf Course connected to Shelby Bottoms Greenway in East Nashville, Tennessee",
          'road, bike, greenway, nashville, ride, cycling, velo, canyon, golf course, riding',
          post
        )
      }
      if (this.chema) {
        head.script = this.schema
      }
      return head
    },
    data() {
      return {
        image: `${s3Pages}${ravenwoodRide}/canyon-ravenwood.jpg`,
        post: post,
        relatedPosts: [
          posts.gravelocity2017Video,
          posts.gravelocity2018
        ]
      }
    }
  }
</script>
