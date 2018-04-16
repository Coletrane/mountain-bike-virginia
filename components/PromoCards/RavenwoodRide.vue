<template>
  <post-card :post="$store.getters.getPost(ravenwoodRide)"
             no-author>
    <div slot="media">
      <youtube :src="$store.getters.getPost(ravenwoodRide).ytSrc"/>
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
        ravenwoodRide: ravenwoodRide
      }
    }
  }
</script>
