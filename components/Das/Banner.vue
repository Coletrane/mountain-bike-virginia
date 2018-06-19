<template>
  <div>
    <a v-if="banner"
       :href="banner.url"
       class="banner">
      <responsive-img :src="banner.img"/>
    </a>
  </div>
</template>
<script>
  import ResponsiveImg from '../Images/ResponsiveImg'

  import da from '../../assets/mixins/da'

  export default {
    components: {
      ResponsiveImg
    },
    name: 'banner',
    mixins: [
      da
    ],
    data() {
      return {
        banner: null
      }
    },
    async mounted() {
      this.banner = await this.$store.dispatch('randomBanner')
    }
  }
</script>
<style scoped>
  img[lazy=loading] {
    width: 25% !important;
    height: auto !important;
    display: block !important;
    margin: auto !important;
    background-color: #FFFFFF !important;
  }

  img[lazy=error] {
    width: 25% !important;
  }

  @media (min-width: 1200px) {
    div {
      max-height: 250px;
      overflow: hidden;
    }
  }
</style>