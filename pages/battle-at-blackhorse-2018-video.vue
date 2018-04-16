<template>
  <div>
    <blog-post :header-height="900"
               :image="img"
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
  import BlogPost from '../components/BlogPost.vue'
  import Youtube from '../components/Iframes/Youtube.vue'

  import {s3Pages} from '../scripts/routes'
  import {
    headTags,
    buildVideo
  } from '../assets/functions'

  export default {
    name: 'battle-at-blackhorse-2018-video',
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context) {
      let post = await context.store.dispatch('loadPosts', [
        'battle-at-blackhorse-2018-video'])
       return {
         schema: await buildVideo(post),
         post: post,
         relatedPosts: await context.store.dispatch('loadPosts',[
           'battle-at-blackhorse-2018',
           'dody-ridge-run-fall-2017'
         ])
       }
    },
    head() {
      if (this.post && this.schema) {
        return {
          ...headTags(
            'Video: Battle at Blackhorse 2018',
            this.post.description,
            'mountain, bike, race, enduro, trail, all mountain, time, blog, trails, blue, ridge, blue ridge, blue ridge parkway, glenwood horse trail, gnar, virginia',
            this.post),
          script: this.schema
        }
      }
    },
    data() {
      return {
        img: `${s3Pages}/battle-at-blackhorse-2018/P1000195.jpg`
      }
    }
  }
</script>
