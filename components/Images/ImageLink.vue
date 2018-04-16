<template>
  <nuxt-link
    :to="link">
    <responsive-img :src="img"
                    :alt="post.title"/>
  </nuxt-link>
</template>
<script>
  import ResponsiveImg from "./ResponsiveImg"

  import {
    s3Pages
  } from '../../scripts/routes'

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
      link() {
        if (this.href) {
          return this.href
        } else if (this.post &&
                   this.$router.options.pages.find(route => route.name === this.post.route)) {
          return {name: this.post.route}
        } else {
          return {name: 'index'}
        }
      },
      img() {
        if (this.src) {
          return this.src
        } else {
          return `${s3Pages}/${this.post.route}/${this.post.imageRoute}`
        }
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
