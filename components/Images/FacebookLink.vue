<template>
  <a :href="href">
    Details
    <img :src="s3StaticImg + 'fb-link.svg'">
  </a>
</template>

<script>
  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: 'facebook-link',
    props: {
      href: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        s3StaticImg: s3StaticImg
      }
    }
  }
</script>

<style scoped>
  img {
    width: 1.2rem;
    padding-bottom: .3rem;
  }
</style>
