<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      {{post.description}}
    </div>
  </post-card>
</template>
<script>
import PostCard from "../Card/PostCard"
import ImageLink from "../Images/ImageLink"

import abstractPromoCard from "../../assets/mixins/abstract-promo-card"

export default {
  name: "blog-post-promo-card",
  components: {
    PostCard,
    ImageLink
  },
  mixins: [abstractPromoCard]
}
</script>
