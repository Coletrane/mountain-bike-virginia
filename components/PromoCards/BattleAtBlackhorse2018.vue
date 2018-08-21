<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        23 miles, 3 stages, of absolute brutality from the Glenwood Horse trail, Hammin Hollow, and Dody Ridge
        trails. We'd like to give a Hell Yeah to all the shredders that finished this tough race.
        <nuxt-link :to="{name: 'results-battle-at-blackhorse-2018'}">
          Check out the results here.
        </nuxt-link>
      </div>
    </div>
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../Card/PostCard"
import ImageLink from "../Images/ImageLink"

import promoCard from "../../mixins/promo-card"

export default {
  name: "battle-at-blackhorse-2018-promo",
  components: {
    PostCard,
    ImageLink
  },
  mixins: [promoCard]
}
</script>
