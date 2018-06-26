<template>
  <m-t-b-v-a-header :image="image" title=""/>
</template>
<script>
import MTBVAHeader from "../components/Header/MTBVAHeader"

import { s3StaticImg } from "../scripts/routes"

export default {
  name: "error",
  components: {
    MTBVAHeader
  },
  data() {
    return {
      image: `${s3StaticImg}/error.png`
    }
  }
}
</script>
<style scoped>
</style>
