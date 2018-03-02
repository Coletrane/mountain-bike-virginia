<template>
  <div>
    <blog-post :header-height="600"
               :image="img + 'tnl.jpg'"
               :post="post"
               inline-author
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
  import {s3Pages, tuesdayNightLightsVideoFeb2018} from '../scripts/routes'
  import {posts} from '../assets/posts'
  import {headTags} from '../assets/functions'
  import {home} from '../assets/head-tags'

  import BlogPost from '../components/BlogPost'
  import Youtube from '../components/Iframes/Youtube'

  const post = posts.tuesdayNightLightsVideoFeb2018

  export default {
    name: 'tuesday-night-lights-video-feb-2018',
    components: {
      Youtube,
      BlogPost
    },
    head() {
      return
        headTags(
        post.title,
        post.subtitle,
        'mill mountain, night ride, lights, deschutes brewery, deschutes' + home.keywords,
        post
      )
    },
    data() {
      return {
        img: `${s3Pages}${tuesdayNightLightsVideoFeb2018}/`,
        post: post,
        relatedPosts: [
          posts.gravelocity2018,
          posts.creature2017Recap
        ]
      }
    }
  }
</script>
