<template>
  <nuxt-link
    :to="post.route">
    <img :v-lazy="post.img">
  </nuxt-link>
</template>
<script>
  export default {
    name: "image-link",
    props: ["post"]
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
</style>
