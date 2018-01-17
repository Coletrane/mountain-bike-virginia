<template>
  <nuxt-link
    :to="post.route">
    <img v-lazy="image">
  </nuxt-link>
</template>
<script>
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: "image-link",
    props: ["post"],
    computed: {
      image: function() {
        return {
          src: this.post.img,
          error: `${s3}${s3StaticImg}error.png`,
          loading: `${s3}${s3StaticImg}loading.gif`
        }
      }
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
