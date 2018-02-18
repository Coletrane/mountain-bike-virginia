<template>
    <nav class="mtbva-menu">
        <div class="mtbva-nav-close">
          <a @click="closeMenu()">
            <i class="fa fa-close"></i>
          </a>
        </div>
        <div class="mtbva-nav-item">
          <nuxt-link to="/"
                     class="nav-link"
                     id="trails-link">
            <i class="fa fa-bicycle"></i>
            Trails
          </nuxt-link>
        </div>
        <div class="mtbva-nav-item">
          <nuxt-link to="results"
                     class="nav-link"
                     id="results-link">
            <i class="fa fa-list-ol"></i>
            Results
          </nuxt-link>
        </div>
        <div class="mtbva-nav-item">
          <a class="nav-link"
             id="facebook-nav-link"
             href="https://www.facebook.com/xxcva/">
            <i class="fa fa-facebook-official"></i>
            Facebook
          </a>
        </div>
    </nav>
</template>

<script>
  export default {
    name: "mtbva-menu",
    methods: {
      closeMenu() {
        this.$store.commit('closeMenu')
      }
    }
  }
</script>

<style scoped>
  .mtbva-menu {
    position: absolute;
    right: 0;
    color: white;
    display: block;
    z-index: 999;
    width: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    pointer-events: auto;
    top: 0;
    will-change: transform;
    background-color: rgba(255, 255, 255, 0.9);
  }

  a {
    color: black;
    font-size: 2rem;
    font-family: 'Julius Sans One', sans-serif;
  }

  a:hover {
    text-decoration: none;
  }

  .mtbva-nav-close {
    color: black;
    text-align: right;
  }

  .mtbva-nav-item {
    border-bottom: 2px solid black;
  }
</style>