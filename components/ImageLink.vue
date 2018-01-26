<template>
  <div>
  <nuxt-link
    :to="href ? href : post.route">
    <img v-lazy="src ? src : post.img">
  </nuxt-link>
  </div>
</template>
<script>
  export default {
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
