<template>
  <post-card :post="post">
    <div slot="media">
      <instagram :src="post.instagram"/>
    </div>
    <div slot="words">
      <div class="promo">
        {{post.promo}}
      </div>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../../Card/PostCard"
import ImageLink from "../../Images/ImageLink"
import Instagram from "../../Iframes/Instagram"

import promoCard from "../../../mixins/promo-card"

export default {
  name: "events-roanoke-silver-ride-center-promo",
  components: {
    PostCard,
    ImageLink,
    Instagram
  },
  mixins: [promoCard]
}
</script>
