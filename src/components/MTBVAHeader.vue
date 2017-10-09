<template>
  <v-parallax v-bind:src="image"
              v-bind:height="headerHeight">
    <v-toolbar extended absolute class="toolbar">
      <router-link to="home" class="nav-link">
        <img class="mtbva" src="../../static/img/mtbva.png">
      </router-link>
      <router-link to="home" class="xxcva-link nav-link">
        <img class="xxcva" src="../../static/img/XXCVA.jpg" alt="XXCVA">
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/results" class="nav-text">
          Results
      </router-link>
      <a class="nav-link"
         href="https://www.facebook.com/xxcva/">
        <img src="../../static/img/fb.svg"
             class="fb">
      </a>
    </v-toolbar>

    <v-layout column align-center justify-center>
      <h3 class="white--text mtbva-title">{{title}}</h3>
      <h5 class="white--text mtbva-title">{{subtitle}}</h5>
      <v-btn raised
             v-if="buttonLink"
             v-bind:href="buttonLink"
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
