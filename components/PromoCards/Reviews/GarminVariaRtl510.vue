<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
import PostCard from "~/components/Card/PostCard"
import ImageLink from "~/components/Images/ImageLink"

import promoCard from "~/assets/mixins/promo-card"

export default {
  name: "reviews-garmin-varia-rtl510",
  components: {
    PostCard,
    ImageLink
  },
  mixins: [promoCard]
}
</script>
