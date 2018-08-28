<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"
                  :src="img + 'dragons-back-flyer.jpg'"/>
      <image-link :post="post"/>
    </div>
  </post-card>
</template>
<script>
import promoCard from "../../../mixins/promo-card"

export default {
  name: "trails-dragons-back-promo",

  mixins: [promoCard]
}
</script>
