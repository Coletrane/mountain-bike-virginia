<template>
  <v-parallax :src="image"
              :height="headerHeight"
              class="header-wrapper">
    <v-toolbar extended absolute class="toolbar">
      <nuxt-link to="/" class="nav-link">
        <img class="mtbva" :src="img + 'mtbva.png'">
      </nuxt-link>
      <nuxt-link to="/" class="xxcva-link nav-link">
        <img class="xxcva" :src="img + 'XXCVA.jpg'" alt="XXCVA">
      </nuxt-link>

      <v-spacer></v-spacer>

      <nuxt-link to="/results" class="nav-text">
          Results
      </nuxt-link>
      <a class="nav-link"
         href="https://www.facebook.com/xxcva/">
        <img :src="img + 'fb.svg'"
             class="fb">
      </a>
    </v-toolbar>

    <v-layout column align-center justify-center>
      <h3 class="white--text mtbva-title">{{title}}</h3>
      <h5 class="white--text mtbva-title">{{subtitle}}</h5>
      <v-btn raised
             v-if="buttonLink"
             :href="buttonLink"
             class="header-button">
        {{button}}
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name: 'mtbva-header',
    props: [
      'header-height',
      'image',
      'title',
      'subtitle',
      'button',
      'buttonLink'
    ],
    data() {
      return {
        img: process.env.s3 + '/static/img/'
      }
    }
  }
</script>

<style>
  /*.parallax__image-container {*/
  /*z-index: -1;*/
  /*background: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.69));*/
  /*}*/
  /*.parallax__image {*/
  /*z-index: -1;*/
  /*opacity: 0.25 !important;*/
  /*}*/

  .header-wrapper {
    background-color: black;
  }
  .toolbar {
    background-color: transparent !important;
    margin-bottom: 32rem;
  }
  @media screen and (max-width: 480px) {
    .xxcva {
      display: none;
    }
  }
  .xxcva {
    width: 12rem;
  }
  .mtbva {
    width: 8rem;
  }
  .xxcva-link {
    margin-left: 1rem;
  }
  .fb {
    width: 2.5rem;
  }
  .nav-text {
    margin-top: 4.5rem !important;
    color: white !important;
    margin-left: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
  }
  .nav-link {
    margin-top: 4.5rem;
  }

  .mtbva-title {
    text-align: center;
  }
  .header-button {
    background-color: transparent !important;
    border: 2px solid white !important;
    color: white !important;
  }
  </style>
