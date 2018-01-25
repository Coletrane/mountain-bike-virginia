<template>
  <div>
      <div class="app-fade-wrapper">
        <transition name="app-fade">
          <nuxt/>
        </transition>
      </div>
      <div v-if="showFooter">
        <m-t-b-v-a-footer/>
      </div>
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
          window.removeEventListener("scroll", this.handleScroll)
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
<!--Global styles here, all others are scoped-->
<style>
  h1, h2, h3, h4 {
    font-family: 'Julius Sans One', sans-serif;
  }

  span, div, p {
    font-family: 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .white-btn {
    font-family: 'Julius Sans One', sans-serif;
    color: white;
    border-color: white;
    font-size: 2rem;
  }
  .white-btn:hover {
    background-color: rgba(0,0,0, 0.75);
    border-color: white;
  }
  .white-btn:active {
    background-color: #3d7635 !important;
    border-color: white !important;
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

  .main-content {
    background-color: rgb(78, 69, 49);
    background-image: url("http://d2i660bt0ywr9a.cloudfront.net/static/img/asfalt-light.png");
    background-repeat: repeat;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 750px) {
    .main-content {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media (max-width: 575px) {
    .main-content {
      padding-left: 0;
      padding-right: 0;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

</style>
