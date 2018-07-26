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
import PostCard from "@/components/Card/PostCard"
import ImageLink from "@/components/Images/ImageLink"

import promoCard from "@/assets/mixins/promo-card"

export default {
  name: "events-dragons-back-foggy-summer-2018-promo",
  components: {
    PostCard,
    ImageLink
  },
  mixins: [promoCard]
}
</script>
