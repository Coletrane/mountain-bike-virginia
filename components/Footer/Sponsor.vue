<template>
  <a :href="sponsor.url">
    <img v-lazy="sponsor.img"
         :class="sponsor.class + '-img-' + columns"
         class="sponsor"
         :alt="sponsor.class"/>
  </a>
</template>

<script>
  export default {
    name: 'sponsor',
    props: {
      sponsor: {
        type: Object,
        required: true
      },
      columns: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>
  .sponsor {
    width: 90%;
  }
</style>
