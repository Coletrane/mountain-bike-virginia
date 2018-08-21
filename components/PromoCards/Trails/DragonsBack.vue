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
import PostCard from "../../Card/PostCard"
import ImageLink from "../../Images/ImageLink"

import promoCard from "../../../mixins/promo-card"

export default {
  name: "trails-dragons-back-promo",
  components: {
    PostCard,
    ImageLink
  },
  mixins: [promoCard]
}
</script>
