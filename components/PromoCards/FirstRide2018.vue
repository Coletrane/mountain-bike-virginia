<template>
  <post-card :post="$store.getters.getPost(firstRide2018)"
             no-author>
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
      <image-link :post="$store.getters.getPost(firstRide2018)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'
  
  import {firstRide2018} from '../../scripts/routes'
  
  export default {
    name: 'first-ride-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        firstRide2018: firstRide2018
      }
    }
  }
</script>

<style scoped>

</style>