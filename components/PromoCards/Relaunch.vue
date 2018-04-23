<template>
  <post-card :post="post"
  >
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  export default {
    name: 'relaunch-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        post: this.$store.getters.getPost('relaunch')
      }
    }
  }
</script>
