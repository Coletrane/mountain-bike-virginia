<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        For the 28th consecutive year the the first ride of the new year was a roaring
        (shivering) success.
        Thank you to everyone who turned out and cranked out some of the most frigid miles
        they'll have all
        year.
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
    name: 'first-ride-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        post: this.$store.getters.getPost('first-ride-2018')
      }
    }
  }
</script>
