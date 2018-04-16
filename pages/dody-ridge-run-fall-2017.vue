<template>
  <div>
    <blog-post
      :header-height="700"
      :image="img + 'iron-mine.jpg'"
      :post="post"
      header-author>
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
  import {
    headTags,
    buildVideo
  } from "../assets/functions"

  export default {
    name: 'dody-ridge-run-fall-2017',
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context) {
      let post = await context.store.dispatch('loadPosts', [
        dodyRidgeRunFall2017
      ])
      return {
        schema: await buildVideo(post),
        post: post
      }
    },
    head() {
      if (this.post && this.schema) {
        return {
          ...headTags(
            this.post.title,
            this.post.description,
            "mountain, bike, dody, ridge, blue ridge parkway, blue ridge, virginia, trail, rocky, ride, mountain bike, 29er, enduro, all mountain",
            this.post),
          script: this.schema
        }
      }
    },
    data() {
      return {
        img: `${s3Pages}/${dodyRidgeRunFall2017}/`
      }
    }
  }
</script>

