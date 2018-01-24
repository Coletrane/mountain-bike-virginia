<template>
  <div>
    <parallax :src="image"
              :height="headerHeight">
      <div slot="hero">
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
              <div class="btn">
                {{button}}
              </div>
            </a>
          </transition>
        </div>
      </div>
    </parallax>
  </div>
</template>
<script>
  import Navigation from "./Navigation"
  import MTBVAParallax from "./Parallax"
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
<style scoped>
  .two-sec-fade-enter-to {
    transition: opacity 2s;
  }

  .two-sec-fade-enter {
    opacity: 0;
  }

  .mtbva-title {
    text-align: center;
  }
</style>
