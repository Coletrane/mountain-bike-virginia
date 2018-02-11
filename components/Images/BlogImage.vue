<template>
  <responsive-img :src="src"
                  :portrait="portrait"/>
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
