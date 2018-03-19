<template>
  <div>
    <blog-post :header-height="600"
               :image="img + 'tnl.jpg'"
               :post="post"
               header-author
               no-title
               :related-posts="relatedPosts">
      <div slot="content">
        <div>
          <youtube :src="post.ytSrc"/>
        </div>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import Youtube from '../components/Iframes/Youtube'

  import {
    s3Pages,
    tuesdayNightLightsVideoFeb2018,
    gravelocity2018,
    creature2017Recap
  } from '../scripts/routes'
  import {
    headTags,
    buildVideo
  } from '../assets/functions'
  import {home} from '../assets/head-tags'

  export default {
    name: 'tuesday-night-lights-video-feb-2018',
    components: {
      Youtube,
      BlogPost
    },
    async asyncData(context) {
      let post = await context.store.dispatch('loadPosts',[
        tuesdayNightLightsVideoFeb2018])
      return {
        schema: await buildVideo(post),
        post: post,
        relatedPosts: await context.store.dispatch('loadPosts', [
          gravelocity2018,
          creature2017Recap
        ])
      }
    },
    head() {
      if (this.post && this.schema) {
        return {
          ...headTags(
            this.post.title,
            this.post.subtitle,
            'mill mountain, night ride, lights, deschutes brewery, deschutes' + home.keywords,
            this.post),
          script: this.schema
        }
      }
    },
    data() {
      return {
        img: `${s3Pages}/${tuesdayNightLightsVideoFeb2018}/`
      }
    }
  }
</script>
