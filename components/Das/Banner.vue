<template>
  <a :href="href"
      class="banner">
    <responsive-img :src="img"/>
  </a>
</template>
<script>
  import ResponsiveImg from '../Images/ResponsiveImg'

  import da from '../../assets/mixins/da'

  export default {
    components: {ResponsiveImg},
    name: 'banner',
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
      da
    ]
  }
</script>
