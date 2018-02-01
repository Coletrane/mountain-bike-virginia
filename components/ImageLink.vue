<template>
  <div>
  <nuxt-link
    :to="href ? href : post.route">
    <img v-lazy="src ? src : post.img"
         :data-srcset="srcset()"/>
  </nuxt-link>
  </div>
</template>
<script>
  import {srcset} from "../assets/functions";

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
    },
    computed: {
      img() {
        return this.src ? this.src : this.post.img
      }
    },
    methods: {
      srcset() {
        console.log(srcset(this.img))
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
