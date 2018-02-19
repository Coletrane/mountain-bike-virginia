<template>
    <nav class="mtbva-menu">
        <div class="mtbva-nav-item mtbva-nav-close">
          <a @click="closeMenu()"
             id="close-menu-link">
            <i class="fa fa-close"></i>
          </a>
        </div>
        <div class="mtbva-nav-item">
          <nuxt-link to="/"
                     class="nav-link"
                     id="trails-nav-link">
            <i class="fa fa-bicycle"></i>
            Trails
          </nuxt-link>
        </div>
        <div class="mtbva-nav-item">
          <nuxt-link to="results"
                     class="nav-link"
                     id="results-nav-link">
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
        <div class="tag-bottom">
          <img :src="pirates"
               alt="Mountain Bike Virginia Pirates"
               class="pirates"/>
        </div>
    </nav>
</template>

<script>
  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: "mtbva-menu",
    data() {
      return {
        pirates: `${s3StaticImg}jolly.png`
      }
    },
    methods: {
      closeMenu() {
        this.$store.commit('closeMenu')
      }
    }
  }
</script>

<style scoped>
  .mtbva-menu {
    position: fixed;
    right: 0;
    color: white;
    display: block;
    z-index: 999;
    width: 300px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    pointer-events: auto;
    top: 0;
    will-change: transform;
    background-color: black;
  }

  a {
    color: white;
    font-size: 2rem;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: 800;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }
  @media (max-width: 575px) {
    .mtbva-menu {
      width: 200px;
    }
    a {
      font-size: 1.3rem;
    }
  }

  .mtbva-nav-close {
    color: white;
    padding-top: 1rem;
    text-align: center;
    font-size: 2rem;
  }

  .tag-bottom {
    position: absolute;
    bottom: 2%;
    width: 100%;
    text-align: center;
  }
  .pirates {

    width: 125px;
  }
</style>