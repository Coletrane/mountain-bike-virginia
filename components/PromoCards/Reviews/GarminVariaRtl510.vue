<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
import promoCard from "../../../mixins/promo-card"

export default {
  name: "reviews-garmin-varia-rtl510",

  mixins: [promoCard]
}
</script>
