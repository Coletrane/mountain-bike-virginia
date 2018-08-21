<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
      <creature-2018-info :post="post"/>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../../Card/PostCard"
import ImageLink from "../../Images/ImageLink"
import Creature2018Info from "../../Temporary/Creature2018Info"

import promoCard from "../../../mixins/promo-card"

export default {
  name: "events-creature-from-carvins-cove-2018-promo",
  components: {
    PostCard,
    ImageLink,
    Creature2018Info
  },
  mixins: [promoCard]
}
</script>
<style>
.no-padding {
  padding: 0 !important;
}
</style>
