<template>
  <div>
    <v-app>
      <div class="app-fade-wrapper">
        <transition name="app-fade">
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
  import MTBVAFooter from "../components/MTBVAFooter.vue"

  export default {
    components: {MTBVAFooter},
    name: "app",
    scrollToTop: true,
    data() {
      return {
        showFooter: false
      }
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 500) {
          this.showFooter = true
        }
      }
    },
    created() {
      // Check if we are on client side since server doesn't have window
      if (process.browser) {
        //not having this.handleScroll() is important for the method to be called over and over
        window.addEventListener("scroll", this.handleScroll)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener("scroll", this.handleScroll)
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
    background-color: rgb(78, 69, 49) !important;
    background-image: url("http://d2i660bt0ywr9a.cloudfront.net/static/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }

  .app-fade-wrapper {
    background-color: black;
  }

  .app-fade-enter-active {
    transition: opacity 1s;
  }

  .app-fade-enter {
    opacity: 0;
  }
</style>
