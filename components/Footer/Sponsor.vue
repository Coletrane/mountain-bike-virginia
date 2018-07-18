<template>
  <a :href="sponsor.url">
    <img v-lazy="sponsor.img"
         :class="sponsor.class"
         :alt="sponsor.class"/>
  </a>
</template>
<script>
export default {
  name: "sponsor",
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  }
}
</script>
