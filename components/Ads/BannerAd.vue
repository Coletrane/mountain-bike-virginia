<template>
  <a :href="href">
    <responsive-img :src="img"/>
  </a>
</template>

<script>
  import ResponsiveImg from '../Images/ResponsiveImg'

  export default {
    components: {ResponsiveImg},
    name: 'banner-ad',
    props: {
      href: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      }
    }
  }
</script>
