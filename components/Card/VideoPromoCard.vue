<template>
  <post-card :post="post">
    <div slot="media">
      <youtube :src="post.ytSrc"/>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../Card/PostCard"
import Youtube from "../Iframes/Youtube"

import abstractPromoCard from "../../mixins/abstract-promo-card"

export default {
  name: "video-promo-card",
  components: {
    PostCard,
    Youtube
  },
  mixins: [abstractPromoCard]
}
</script>
