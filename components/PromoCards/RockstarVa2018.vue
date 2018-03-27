<template>
  <post-card :post="$store.getters.getPost(rockstarVa2018)"
             no-author>
    <div slot="words">
      <div class="promo">
        Come one, come all, to the best gravel, trail, bikepacking, endurance, 270 miles on two wheels. Travel
        between two of the most legendary cycling towns in the country, Harrisonburg and Roanoke. Ride as a team
        or solo (SPOT tracker required) and try to complete the 270, a feat yet to be accomplished.<a
        href="http://roanokemountainadventures.com/"> Roanoke Mountain Adventures</a> will be providing shuttles
        to and from both Harrisonburg and Roanoke. <a href="http://roanokemountainadventures.com/">Rate$ for
        shuttles.</a>
        <div>
          <a href="http://tinyurl.com/rockstargooglemap">Route options (TRAIL or GRAVEl)</a>
        </div>
        <div>
          <a :href="$store.getters.getPost(rockstarVa2018).fbEvent">
            Details
            <font-awesome-icon :icon="faFacebook"
                               class="inline-facebook-icon"/>
          </a>
        </div>
      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(rockstarVa2018)"
                  :href="$store.getters.getPost(rockstarVa2018).fbEvent"
                  :src="s3Pages + '/' + rockstarVa2018 + '/rockstar.jpg'"/>
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