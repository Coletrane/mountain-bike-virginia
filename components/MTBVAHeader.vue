<template>
  <m-t-b-v-a-parallax :src="image"
              :height="headerHeight">
    <div slot="nav">
    <nav class="toolbar toolbar toolbar--absolute toolbar--extended"
         style="margin-top:0px;padding-right:0px;padding-left:0px;transform:translateY(0px);" data-booted="true">
      <div class="toolbar__content" style="height: 64px;">
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
        <v-spacer/>
        <nuxt-link to="/results" class="nav-text">
          Results
        </nuxt-link>
        <a class="nav-link"
           href="https://www.facebook.com/xxcva/">
          <img :src="img + 'fb.svg'"
               class="fb"/>
        </a>
        <div class="toolbar__extension" style="height: 64px;"></div>
      </div>
    </nav>
    <v-layout column align-center justify-center>
      <div class="hero-content-container mtbva-title">
        <transition appear
                    name="two-sec-fade"
                    v-on:enter="titleEntered">
          <h1 v-if="showTitle"
              class="white--text display-2">
            {{title}}
          </h1>
        </transition>
        <transition appear
                    name="two-sec-fade"
                    v-on:enter="subtitleEntered">
          <h2 class="white--text headline"
              v-if="showSubtitle">
            {{subtitle}}
          </h2>
        </transition>
        <transition appear
                    name="two-sec-fade">
          <a v-if="buttonLink && showHeroButton"
             :href="buttonLink"
             class="header-button btn hero-button"
             data-ripple="true">
            <div class="btn__content">
              {{button}}
            </div>
          </a>
        </transition>
      </div>
    </v-layout>
    </div>
  </m-t-b-v-a-parallax>
</template>
<script>
  import MTBVAParallax from './MTBVAParallax'
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: "mtbva-header",
    components: {
      MTBVAParallax
    },
    props: {
      headerHeight: {
        type: Number,
        required: false,
        default: 600
      },
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: false
      },
      subtitle: {
        type: String,
        required: false
      },
      button: {
        type: String,
        required: false
      },
      buttonLink: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        img: `${s3}${s3StaticImg}`,
        showTitle: false,
        showSubtitle: false,
        showHeroButton: false
      }
    },
    mounted() {
      this.showTitle = true
    },
    methods: {
      titleEntered: function (el, done) {
        setTimeout(() => {
          this.showSubtitle = true
        }, 1000)
      },
      subtitleEntered: function (el, done) {
        setTimeout(() => {
          this.showHeroButton = true
        }, 1000)
      }
    }
  }
</script>
<style>
  .header-wrapper {
    background-color: black;
  }

  .toolbar {
    background-color: transparent !important;
    margin-bottom: 32rem;
    height: 130px;
  }

  .toolbar-solid {
    background-color: white !important;
    opacity: 0.8;

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

  .hero-button {
    display: block;
    margin-left: 25%;
    margin-right: 25%;
  }

  .hero-content-container {
    height: 150px;
  }

  .two-sec-fade-enter-to {
    transition: opacity 2s;
  }

  .two-sec-fade-enter {
    opacity: 0;
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
