<template>
  <div>
    <blog-post :image="img + post.imgRoute"
               :post="post"
               header-author
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

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'tuesday-night-lights-video-feb-2018',
    components: {
      Youtube,
      BlogPost
    },
    async asyncData(context) {
      let post = await context.store.dispatch('loadPosts',[
        'tuesday-night-lights-video-feb-2018'
      ])
      return {
        schema: await buildVideo(post),
        post: post,
        relatedPosts: await context.store.dispatch('loadPosts', [
          'gravelocity-2018',
          'creature-2017-recap'
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
        img: `${s3Pages}/tuesday-night-lights-video-feb-2018/`
      }
    }
  }
</script>
