<template>
  <img v-lazy="url"
       :class="portrait ? 'portrait' : 'landscape'"
       :alt="alt"/>
</template>
<script>
import responsiveImg from "../../mixins/responsive-img"

export default {
  name: "responsive-img",
  props: {
    portrait: {
      default: false
    },
    alt: {
      type: String,
      default: "Mountain Bike Virginia"
    }
  },
  mixins: [responsiveImg]
}
</script>
<style>
.landscape[lazy="loaded"] {
  width: 100%;
}

.portrait[lazy="loaded"] {
  width: 65%;
  display: block;
  margin: auto;
}

@media (max-width: 800px) {
  .portrait[lazy="loaded"] {
    width: 100%;
  }
}
</style>
