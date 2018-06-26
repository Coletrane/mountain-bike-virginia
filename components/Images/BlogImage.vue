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
    }
  },
  components: {
    ResponsiveImg
  },
  computed: {
    alt() {
      if (process.browser) {
        let route = window.location
          .toString()
          .substr(window.location.toString().lastIndexOf("/") + 1)
        route = route.split("-").join(" ")
        return route
      } else {
        return "Mountain Bike Virginia"
      }
    }
  }
}
</script>
