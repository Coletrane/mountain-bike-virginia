<template>
  
</template>

<script>
  import BlogPost from "../components/BlogPost.vue"
  import Youtube from "../components/Iframes/Youtube.vue"
  import BlogImage from "../components/Images/BlogImage.vue"

  import {s3Pages} from "../scripts/routes"
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"

  const post = posts.battleAtBlackhorse2018

  export default {
    name: 'battle-at-blackhorse-2018',
    components: {
      BlogImage,
      BlogPost,
      Youtube
    },
    head() {
      return headTags(
        'Battle at Blackhorse 2018',
        'Enduro race on the Glenwood Horse Trail up to the Blue Ridge Parkway and finishing with Dody Ridge',
        'mountain, bike, race, enduro, trail, all mountain, time, blog, trails, blue, ridge, blue ridge, blue ridge parkway, glenwood horse trail, gnar, virginia',
        post
      )
    }
  }
</script>

<style scoped>

</style>