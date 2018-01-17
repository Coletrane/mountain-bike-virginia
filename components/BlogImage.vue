<template>
  <img v-lazy="image"
       :class="portrait ? 'portrait' : 'landscape'">
</template>

<script>
  import {s3, s3StaticImg} from '../routes'

  export default {
    name: "blog-image",
    props: {
      src: {
        type: String,
        required: true
      },
      portrait: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      image: function() {
        return {
          src: this.src,
          error: `${s3}${s3StaticImg}error.png`,
          loading: `${s3}${s3StaticImg}loading.gif`
        }
      }
    }
  }
</script>
<style scoped>
  .landscape[lazy=loaded] {
    width: 100% !important;
  }

  .portrait[lazy=loaded] {
    width: 50% !important;
    display: block;
    margin: auto;
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
