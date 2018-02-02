<template>
  <responsive-img :src="src"
                  :class="portrait ? 'portrait' : 'landscape'"/>
</template>
<script>
  import ResponsiveImg from "./ResponsiveImg"

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
    components: {
      ResponsiveImg
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
</style>
