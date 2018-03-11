<template>
  <div>
    <blog-post :header-height="900"
               :image="img + 'P1000195.jpg'"
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
  import Author from '../components/Card/Author'

  import {s3Pages, battleAtBlackhorse2018} from '../scripts/routes'
  import {headTags, buildVideo} from '../assets/functions'

  const post = $store.state.posts.battleAtBlackhorse2018Video

  export default {
    name: 'battle-at-blackhorse-2018-video',
    components: {
      BlogPost,
      Youtube,
      Author
    },
    async asyncData(context) {
       return {
         schema: await buildVideo(post)
       }
    },
    head() {
      let head = {
        ...headTags(
          'Video: Battle at Blackhorse 2018',
          $store.state.posts.battleAtBlackhorse2018.description,
          'mountain, bike, race, enduro, trail, all mountain, time, blog, trails, blue, ridge, blue ridge, blue ridge parkway, glenwood horse trail, gnar, virginia',
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
        img: `${s3Pages}${battleAtBlackhorse2018}/`,
        post: post,
        relatedPosts: [
          $store.state.posts.battleAtBlackhorse2018,
          $store.state.posts.dodyRidgeRunFall2017
        ]
      }
    }
  }
</script>
