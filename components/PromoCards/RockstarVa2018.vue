<template>
  <post-card :post="$store.getters.getPost(rockstarVa2018)"
             no-author>
    <div slot="words">
      <div class="promo">
        An absolutely insane, marvelous, and memorable experience. The innagural year of the RockStar VA, a 270 mile race from Harrisonburg to Roanoke, Virginia. Facing snow in the first week of April wasn't part of the plan. Many bailed prior to the race, I was one of the only ones to bail during the race.
      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(rockstarVa2018)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  
  import {
    s3Pages,
    rockstarVa2018
  } from '../../scripts/routes'
  
  export default {
    name: 'rockstar-va-2018-promo',
    components: {
      PostCard,
      ImageLink,
      FontAwesomeIcon
    },
    data() {
      return {
        rockstarVa2018: rockstarVa2018,
        s3Pages: s3Pages,
        faFacebook: faFacebook
      }
    }
  }
</script>

<style scoped>

</style>