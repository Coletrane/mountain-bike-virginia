<template>
  <post-card :post="post"
             no-author>
    <div slot="words">
      <div class="promo">

      </div>
    </div>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  export default {
    name: 'rocky-mountain-instinct-review-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        post: this.$store.getters.getPost('rocky-mountain-instinct-review')
      }
    }
  }
</script>