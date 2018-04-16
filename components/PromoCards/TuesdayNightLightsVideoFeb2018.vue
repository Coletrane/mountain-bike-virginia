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
    name: 'tuesday-night-lights-video-feb-2018-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        post: this.$store.getters.getPost('tuesday-night-lights-video-feb-2018')
      }
    }
  }
</script>
