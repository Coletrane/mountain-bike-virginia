<template>
  <div>
    <transition name="menu-slide">
      <m-t-b-v-a-menu v-if="$store.state.misc.showMenu"/>
    </transition>
    <transition name="overlay-fade">
      <div v-if="$store.state.misc.showMenu"
           @click="closeMenu"
           class="overlay">
      </div>
    </transition>
    <div class="app-fade-wrapper">
      <transition name="app-fade">
        <nuxt/>
      </transition>
    </div>
    <div>
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
      closeMenu() {
        this.$store.dispatch('closeMenu')
      },
      onLoad() {
        this.$store.dispatch('onLoad')
        window.removeEventListener('load', this.onLoad)
      }
    },
    created() {
      // Check if we are on client side since server doesn't have window
      if (process.browser) {
        window.addEventListener('load', this.onLoad)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('load', this.onLoad)
      }
    },
    computed: {
      menuOpen() {
        return this.$store.state.misc.showMenu
      }
    },
    watch: {
      menuOpen() {
        if (this.$store.state.misc.showMenu && process.browser) {
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'auto'
        }
      }
    }
  }
</script>
<style>
  body {
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
    box-shadow: 0px 0px 7px 1px rgb(0, 0, 0);
    text-shadow: 4px 3px 3px rgb(0, 0, 0);

  }

  .white-btn:hover {
    background-color: rgba(0, 0, 0, 0.75);
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

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s cubic-bezier(.25, .8, .5, 1);
    z-index: 5;
    pointer-events: auto;
    touch-action: none;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .overlay-fade-enter-active, .overlay-fade-leave-active {
    transition: opacity .5s;
  }
  .overlay-fade-enter, .overlay-fade-leave-to {
    opacity: 0;
  }

  .menu-slide-enter-active, .menu-slide-leave-active {
    transition: all .2s ;
  }
  .menu-slide-enter, .menu-slide-leave-to {
    transform: translateX(100%);
  }

  .main-content {
    background-color: rgb(78, 69, 49);
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
    .headline {
      font-size: 1.5rem !important;
    }
    .subheading {
      font-size: 1.2rem !important;
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

  img[lazy=error] {
    width: 100% !important;
  }

  .inline-facebook-icon {
    font-size: 1.5rem;
  }
</style>
