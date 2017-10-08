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

  .content {
    background-color: #291d00 !important;
    background-image: url("./resources/img/asfalt-light.png") !important;
    background-repeat: repeat !important;
  }

</style>
