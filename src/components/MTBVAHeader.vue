<template>
  <v-parallax v-bind:src="image"
              v-bind:height="parallaxHeight">
    <v-toolbar extended absolute class="toolbar">
      <router-link to="blog" class="nav-link">
        <img class="mtbva" src="../resources/img/mtbva.png">
      </router-link>
      <router-link to="blog" class="xxcva-link nav-link">
        <img class="xxcva" src="../resources/img/XXCVA.jpg" alt="XXCVA">
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/results" class="nav-text">
        Results
      </router-link>
      <a class="fb nav-link"
         href="https://www.facebook.com/xxcva/">
        <img src="../resources/img/fb.svg">
      </a>
    </v-toolbar>

    <v-layout column align-center justify-center>
      <h3 class="white--text">{{title}}</h3>
      <h5 class="white--text">{{subtitle}}</h5>
      <v-btn raised v-bind:href="buttonLink">
        {{button}}
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
  import VParallax from "vuetify/src/components/VParallax/VParallax"

  export default {
    name: 'mtbva-header',
    components: {VParallax},
    props: [
      'image',
      'title',
      'subtitle',
      'button',
      'buttonLink'
    ],
    computed: {
      parallaxHeight() {
        const whitelist = [
          'results'
        ]
        let isWhitelist
        whitelist.forEach(name => {
          if (this.$route.name === name) {
            isWhitelist = true;
          }
        })
        if (isWhitelist) {
          return '500'
        } else {
          return '800'
        }
      },

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
    width: 10rem;
  }
  .mtbva {
    width: 8rem;
  }
  .xxcva-link {
    margin-left: 1rem;
  }
  .fb {
    width: 3rem !important;
  }
  .nav-text {
    margin-top: 4.6rem !important;
  }
  .nav-link {
    margin-top: 5rem;
  }
  </style>