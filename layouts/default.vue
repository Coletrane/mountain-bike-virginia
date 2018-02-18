<template>
  <div>
    <m-t-b-v-a-menu v-if="$store.state.showMenu"/>
    <div v-if="$store.state.showMenu"
         @click="toggleMenu"
         class="overlay">
    </div>
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
  import MTBVAFooter from "../components/Footer/MTBVAFooter.vue"
  import MTBVAMenu from '../components/Header/MTBVAMenu'

  export default {
    components: {
      MTBVAFooter,
      MTBVAMenu
    },
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
      },
      toggleMenu() {
        this.$store.commit('toggleMenu')
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
    html, body {
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
    }

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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s cubic-bezier(.25,.8,.5,1);
    z-index: 5;
    pointer-events: auto;
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.6);
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
    background-position-y: 0px;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    .main-content {
      padding-top: 6rem;
      padding-bottom: 6rem;
      padding-left: 8rem;
      padding-right: 8rem;
    }
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

  img[lazy=loading] {
    width: 50% !important;
    height: auto !important;
    display: block !important;
    margin-left: 30% !important;
    margin-right: auto !important;
    margin-top: 25% !important;
    margin-bottom: 25% !important;
    background-color: #FFFFFF !important;
  }

</style>
