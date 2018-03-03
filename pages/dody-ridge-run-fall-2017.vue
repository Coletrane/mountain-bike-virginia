<template>
  <div>
    <blog-post
      :header-height="700"
      :image="img + 'iron-mine.jpg'"
      :post="post"
      inline-author>
      <div slot="content">
        <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogPost from "../components/BlogPost.vue"
  import Youtube from "../components/Iframes/Youtube.vue"

  import {s3Pages} from "../scripts/routes"
  import {posts} from "../assets/posts"
  import {headTags, buildVideo} from "../assets/functions"

  const post = posts.dodyRidgeRunFall2017

  export default {
    name: post.route,
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context){
      return {
        schema: await buildVideo(post)
      }
    },
    head() {
      let head = {
        ...headTags(
          "Video: Dody Ridge Run, Fall 2017",
          post.description,
          "mountain, bike, dody, ridge, blue ridge parkway, blue ridge, virginia, trail, rocky, ride, mountain bike, 29er, enduro, all mountain",
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
