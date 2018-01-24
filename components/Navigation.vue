<template>
  <nav :style="navStyle">
    <nuxt-link to="/"
               class="nav-link"
               key="mtbva">
      <img class="mtbva" :src="img + 'mtbva.png'">
    </nuxt-link>
    <nuxt-link to="/"
               class="xxcva-link nav-link"
               key="xxcva">
      <img class="xxcva" :src="img + 'XXCVA.jpg'" alt="XXCVA">
    </nuxt-link>
    <nuxt-link to="/results" class="nav-text">
      Results
    </nuxt-link>
    <a class="nav-link"
       href="https://www.facebook.com/xxcva/">
      <img :src="img + 'fb.svg'"
           class="fb"/>
    </a>
  </nav>
</template>

<script>
  import {boxShadow} from "../assets/styles"
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: 'navigation',
    data: function() {
      return {
        navStyle: {
          boxShadow: boxShadow
        }
      }
    }
  }
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    z-index: 2;
  }
</style>
