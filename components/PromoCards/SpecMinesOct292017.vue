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
    name: 'spec-mines-oct-29-2017-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        post: this.$store.getters.getPost('spec-mines-oct-29-2017')
      }
    }
  }
</script>
