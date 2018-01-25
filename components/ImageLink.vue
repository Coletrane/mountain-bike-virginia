<template>
  <nuxt-link
    :to="post.route">
    <img v-lazy="post.img">
  </nuxt-link>
</template>
<script>
  export default {
    name: "image-link",
    props: {
      post: {
        required: true,
        type: Object
      }
    },
    created() {
      console.log(this.post)
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
  }
  img[lazy=loading] {
    width: 20%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25%;
    margin-bottom: 25%;
  }
</style>
