<template>
  <v-app>
    <div id="app">

      <transition name="fade">
        <router-view></router-view>
      </transition>

      <m-t-b-v-a-footer v-if="showFooter"></m-t-b-v-a-footer>
    </div>
  </v-app>
</template>

<script>
  import '../static/favicons/android-chrome-192x192.png'
  import '../static/favicons/android-chrome-384x384.png'
  import '../static/favicons/apple-touch-icon.png'
  import '../static/favicons/safari-pinned-tab.svg'
  import '../static/favicons/favicon.ico'
  import '../static/favicons/favicon-16x16.png'
  import '../static/favicons/favicon-32x32.png'
  import '../static/favicons/mstile-150x150.png'
  import '../node_modules/vuetify/dist/vuetify.min.css'

  import MTBVAFooter from './components/MTBVAFooter.vue'

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
  @media screen and (min-width: 600px) {
    .container {
      max-width: 793px !important;;
    }
  }

  .content {
    background-color: rgba(32, 23, 2, 0.68) !important;
    background-image: url("../static/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
