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
    name: 'ravenwood-ride-promo',
    components: {
      PostCard,
      Youtube
    },
    data() {
      return {
        post: this.$store.getters.getPost('ravenwood-ride')
      }
    }
  }
</script>
