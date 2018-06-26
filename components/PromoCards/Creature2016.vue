<template>
  <post-card :post="post">
    <div slot="words">
      <div class="promo">
        The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing
        success. We
        were
        even graced by the presence of the fantastic Mr. <a
        href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still
        managed to take
        first despite starting 3 minutes late.
      </div>
    </div>
    <div class="promo">
      <nuxt-link :to="{name: 'results'}">
        View the results here.
      </nuxt-link>
    </div>
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../Card/PostCard"
import Youtube from "../Iframes/Youtube"

import promoCard from "../../assets/mixins/promo-card"

export default {
  name: "creature-2016-promo",
  components: {
    PostCard,
    Youtube
  },
  mixins: [promoCard]
}
</script>
