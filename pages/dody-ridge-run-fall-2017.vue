<template>
  <div>
    <blog-post
      :header-height="700"
      :image="img + 'iron-mine.jpg'"
      :post="post"
      :inlineAuthor="true">

      <div slot="content">
        <youtube :src="post.ytSrc"></youtube>
      </div>
    </blog-post>
  </div>
</template>


<script>
  import BlogPost from '../components/BlogPost.vue'
  import Youtube from '../components/Youtube.vue'

  import posts from '../assets/posts'

  export default {
    name: 'dody-ridge-run-fall-2017',
    components: {
      BlogPost,
      Youtube
    },
    head() {
      const title = "Video: Dody Ridge Run, Fall 2017"
      const desc = "Ride Down Dody ridge along the Blue Ridge Parkway, mile 98, near the Great Valley Overlook"
      return {
        title: title,
        meta: [
          {name: 'description', content: desc},
          {name: 'og:title', content: title},
          {name: 'og:description', content: desc},
          {name: 'og:type', content: 'website'},
          {name: 'og:url', content: process.env.baseUrl + 'dody-ridge-run-fall-2017'},
          {name: 'og:image', content: process.env.s3 + '/pages/dody-ridge-run-fall-2017/iron-mine.jpg'},
          {keywords: 'mountain, bike, dody, ridge, blue ridge parkway, blue ridge, virginia, trail, rocky, ride, mountain bike, 29er, enduro, all mountain'}
        ]
      }
    },
    data() {
      return {
        img: process.env.s3 + '/pages/dody-ridge-run-fall-2017/',
        post: posts['dody-ridge-run-fall-2017']
      }
    }
  }
</script>
