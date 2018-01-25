<template>
  <div>
    <navigation/>
    <parallax :src="image"
              :height="headerHeight">
      <div slot="hero"
           class="hero-container">
        <div class="hero-content">
          <transition appear
                      name="two-sec-fade"
                      v-on:enter="titleEntered">
            <h1 v-if="showTitle">
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
               class="button-link">
              <button class="btn btn-outline-primary white-btn">
                  {{button}}
              </button>
            </a>
          </transition>
        </div>
      </div>
    </parallax>
  </div>
</template>
<script>
  import Navigation from "./Navigation"
  import Parallax from "./Parallax"
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: "mtbva-header",
    components: {
      Navigation,
      Parallax
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
  .hero-container {

  }
  .hero-content {
    text-align: center;
    position: absolute;
    top: 75%;
    left: 50%;
    width: 100%;
    height: 500px;
    transform: translate(-50%,-50%);
  }

  h1 {
    font-size: 6rem;
  }

  @media (max-width: 575px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .button-link {
    color: transparent;
  }
  .white-btn {
    width: 200px;
  }

  .two-sec-fade-enter-to {
    transition: opacity 2s;
  }

  .two-sec-fade-enter {
    opacity: 0;
  }
</style>
