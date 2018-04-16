<template>
  <post-card :post="$store.getters.getPost(relaunch)"
             no-author>
    <div slot="media">
      <image-link :post="$store.getters.getPost(relaunch)"/>
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
        relaunch: relaunch
      }
    }
  }
</script>
