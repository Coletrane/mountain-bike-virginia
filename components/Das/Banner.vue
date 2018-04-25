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
    components: {ResponsiveImg},
    name: 'banner',
    mixins: [
      da
    ],
    data() {
      return {
        banner: null
      }
    },
    async created() {
      this.banner = await this.$store.dispatch('randomBanner')
    }
  }
</script>
