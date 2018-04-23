<template>
  <post-card :post="post"
  >
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'gravelocity-2017-video-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        post: this.$store.getters.getPost('gravelocity-2017-video')
      }
    }
  }
</script>
