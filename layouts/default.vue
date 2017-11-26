<template>
  <div>
    <v-app>
      <div>
        <transition name="fade">
          <nuxt/>
        </transition>
      </div>

      <div v-if="showFooter">
        <m-t-b-v-a-footer></m-t-b-v-a-footer>
      </div>
    </v-app>
  </div>
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
    methods: {
      handleScroll() {
        if (window.scrollY > 1500) {
          this.showFooter = true
        }
      }
    },
    created() {
      // Check if we are on client side since server doesn't have window
      if (process.browser) {
        //not having this.handleScroll() is important for the method to be called over and over
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
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
    background-image: url("http://d2i660bt0ywr9a.cloudfront.net/static/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
