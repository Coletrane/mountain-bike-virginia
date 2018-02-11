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
  import BlogPost from "../components/BlogPost.vue"
  import Youtube from "../components/Iframes/Youtube.vue"

  import {s3Pages} from "../scripts/routes"
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"

  const post = posts.dodyRidgeRunFall2017

  export default {
    name: post.route,
    components: {
      BlogPost,
      Youtube
    },
    head() {
      return headTags(
        "Video: Dody Ridge Run, Fall 2017",
        "Ride Down Dody ridge along the Blue Ridge Parkway, mile 98, near the Great Valley Overlook",
        "mountain, bike, dody, ridge, blue ridge parkway, blue ridge, virginia, trail, rocky, ride, mountain bike, 29er, enduro, all mountain",
        post
      )
    },
    data() {
      return {
        img: `${s3Pages}${post.route}/`,
        post: post
      }
    }
  }
</script>

<style>
  .author-container {
    padding-top: 0 !important;
    float: none !important;
  }

  </style>
