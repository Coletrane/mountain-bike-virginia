<template>
  <responsive-img :src="src"
                  :portrait="portrait"
                  :alt="alt"/>
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
      },
      alt: {
        type: String,
        default: 'Mountain Bike Virginia'
      }
    },
    components: {
      ResponsiveImg
    }
  }
</script>
