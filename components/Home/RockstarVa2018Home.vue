<template>
  <post-card :post="posts.rockstarVa2018"
             :link="posts.rockstarVa2018.fbEvent">
    <div slot="words">
      <div class="promo">
        Come one, come all, to the best gravel, trail, bikepacking, endurance, 270 miles on two wheels. Travel between two of the most legendary cycling towns in the country, Harrisonburg and Roanoke. Ride as a team or solo (SPOT tracker required) and try to complete the 270, a feat yet to be accomplished.<a href="http://roanokemountainadventures.com/"> Roanoke Mountain Adventures</a> will be providing shuttles to and from both Harrisonburg and Roanoke. <a href="http://roanokemountainadventures.com/">Rate$ for shuttles.</a>
        <div>
          <a href="http://tinyurl.com/rockstargooglemap">Route options (TRAIL or GRAVEl)</a>
        </div>
        <div>
          <facebook-link :href="posts.rockstarVa2018.fbEvent"/>
        </div>
      </div>
    </div>
    <div slot="media">
      <image-link :post="posts.rockstarVa2018"
                  :href="posts.rockstarVa2018.fbEvent"
                  :src="routes.s3Pages + routes.rockstarVa2018 + '/rockstar.jpg'"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import FacebookLink from '../Images/FacebookLink'
  import ImageLink from '../Images/ImageLink'

  import {posts} from '../../assets/posts'
  import * as routes from '../../scripts/routes'

  export default {
    name: 'rockstar-va-2018-home',
    components: {
      PostCard,
      FacebookLink,
      ImageLink
    },
    data() {
      return {
        posts: posts,
        routes: routes
      }
    }
  }
</script>

<style scoped>

</style>