<template>
  <div>
    <navigation/>
    <transition name="menu-slide">
      <m-t-b-v-a-menu v-if="$store.state.misc.showMenu"/>
    </transition>
    <transition name="overlay-fade">
      <div v-if="$store.state.misc.showMenu"
           @click="closeMenu"
           class="overlay"
           id="mtbva-overlay">
      </div>
    </transition>
    <div class="app-fade-wrapper">
      <transition :name="transition">
        <nuxt/>
      </transition>
    </div>
    <m-t-b-v-a-footer/>
  </div>
</template>
<script>
import MTBVAFooter from "../components/Footer/MTBVAFooter.vue"
import MTBVAMenu from "../components/Header/MTBVAMenu"
import Navigation from "../components/Header/Navigation"

export default {
  name: "app",
  components: {
    MTBVAFooter,
    MTBVAMenu,
    Navigation
  },
  data() {
    return {
      transition: "app-fade"
    }
  },
  created() {
    // Check if we are on client side since server doesn't have window
    if (process.browser) {
      window.addEventListener("load", this.onLoad)
      window.onpopstate = () => {
        this.transition = "none"
        // FIXME: find a better way to do this
        setTimeout(() => {
          this.transition = "app-fade"
        }, 1000)
      }
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("load", this.onLoad)
    }
  },
  methods: {
    closeMenu() {
      this.$store.dispatch("closeMenu")
    },
    onLoad() {
      this.$store.dispatch("onLoad")
      window.removeEventListener("load", this.onLoad)
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
        document.body.style.overflowY = "hidden"
      } else {
        document.body.style.overflowY = "auto"
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

h1,
h2,
h3,
h4 {
  font-family: "MyriadPro-Bold", sans-serif;
  font-weight: 800;
}

h2 {
  font-size: 2.5rem;
}

span,
div,
p {
  font-family: "lato", sans-serif;
}

button {
  cursor: pointer;
}

.white-btn {
  font-family: "MyriadPro-Bold", sans-serif;
  font-weight: 800;
  color: white;
  border: 3px solid white;
  font-size: 2rem;
  box-shadow: 0px 0px 7px 1px rgb(0, 0, 0);
  text-shadow: 4px 3px 3px rgb(0, 0, 0);
  background-color: transparent;
  appearance: none;
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
  overflow-x: hidden;
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
  transition: 0.5s cubic-bezier(0.25, 0.8, 0.5, 1);
  z-index: 5;
  pointer-events: auto;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.6);
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.5s;
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.2s;
}

.menu-slide-enter,
.menu-slide-leave-to {
  transform: translateX(100%);
}

.main-content {
  background-color: rgb(78, 69, 49);
  background-repeat: repeat;
  background-position-y: 0px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 2;
}

@media (min-width: 1200px) {
  .main-content {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

@media (max-width: 575px) {
  .main-content {
    padding-top: 0;
    padding-bottom: 0;
  }
}

img[lazy="loading"] {
  width: 50% !important;
  height: auto !important;
  display: block !important;
  margin: auto !important;
  background-color: #ffffff !important;
}

img[lazy="error"] {
  width: 100% !important;
}

.inline-facebook-icon {
  font-size: 1.5rem;
}

.image-smaller {
  width: 60%;
  display: block;
  margin: auto;
}

@media (max-width: 720px) {
  .image-smaller {
    width: 100%;
  }
}

.link-hover {
  background-image: linear-gradient(
    rgba(115, 166, 52, 0.5) 0%,
    rgba(115, 166, 52, 0.5) 100%
  );
  background-repeat: repeat-y;
  background-size: 0% 0em;
  background-position: 0 65%;
  transition: 600ms ease;
}

@media (min-width: 850px) {
  .link-hover:hover {
    background-image: linear-gradient(
      rgba(115, 165, 51, 0.85) 0%,
      rgba(115, 165, 51, 0.85) 100%
    );
    background-size: 100% 1em;
  }
}

.link-hover:active {
  background-image: linear-gradient(
    rgba(115, 165, 51, 0.85) 0%,
    rgba(115, 165, 51, 0.85) 100%
  );
  background-size: 100% 1em;
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}
</style>
