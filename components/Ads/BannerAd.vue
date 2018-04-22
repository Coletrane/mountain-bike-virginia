<template>
  <a :href="href"
      class="banner-ad">
    <responsive-img :src="img"/>
  </a>
</template>
<script>
  import ResponsiveImg from '../Images/ResponsiveImg'

  import ad from '../../assets/mixins/ad'

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
    },
    mixins: [
      ad
    ]
  }
</script>
