<template>
  <nuxt-link
    :to="href ? href : post.route">
    <responsive-img :src="img"
                    :alt="post.title"/>
  </nuxt-link>
</template>
<script>
  import ResponsiveImg from "./ResponsiveImg"

  export default {
    components: {ResponsiveImg},
    name: "image-link",
    props: {
      post: {
        required: true,
        type: Object
      },
      href: {
        type: String
      },
      src: {
        type: String
      }
    },
    components: {
      ResponsiveImg
    },
    computed: {
      img() {
        return this.src ? this.src : this.post.img
      }
    }
  }
</script>
<style scoped>
  div {
    min-height: 400px;
  }

  @media (max-width: 576px) {
    div {
      min-height: 200px;
    }
  }

  img {
    width: 100%;
  }
</style>
