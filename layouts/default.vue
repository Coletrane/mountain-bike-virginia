<template>
  <v-app>
    <div id="app">

      <transition name="fade">
        <nuxt />
      </transition>

      <m-t-b-v-a-footer v-if="showFooter"></m-t-b-v-a-footer>
    </div>
  </v-app>
</template>

<script>
  import MTBVAFooter from '../components/MTBVAFooter.vue'

  export default {
    components: {MTBVAFooter},
    name: 'app',
    data() {
      return {
        showFooter: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.showFooter = true
      }, 1000)
    }
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  @media screen and (max-width: 599px) {
    .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .content {
    background-color: rgba(32, 23, 2, 0.68) !important;
    background-image: url("https://s3.amazonaws.com/mtbva/static/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
