<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      <div class="promo">
      </div>
    </div>
  </post-card>
</template>
<script>
import promoCard from "../../../mixins/promo-card"

export default {
  name: "",
  mixins: [promoCard]
}
</script>
