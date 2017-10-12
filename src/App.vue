<template>
  <v-app>
    <div id="app">

      <transition mode="out-in">
        <router-view></router-view>
      </transition>

      <m-t-b-v-a-footer></m-t-b-v-a-footer>
    </div>
  </v-app>
</template>

<script>
  import * as favicons from '../static/favicons'
  import '../node_modules/vuetify/dist/vuetify.min.css'
  import MTBVAFooter from './components/MTBVAFooter.vue'

  export default {
    components: {MTBVAFooter},
    name: 'app'
  }
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  @media screen and (max-width: 599px) {
    .container {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .content {
    background-color: #211906 !important;
    background-image: url("../static/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }

</style>
