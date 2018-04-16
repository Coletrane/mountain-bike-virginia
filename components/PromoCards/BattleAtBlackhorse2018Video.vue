<template>
  <post-card :post="post"
             no-author>
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'

  export default {
    name: 'battle-at-blackhorse-2018-video-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        post: this.$store.getters.getPost('battle-at-blackhorse-2018-video')
      }
    }
  }
</script>
