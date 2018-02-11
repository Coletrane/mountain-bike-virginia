<template>
    <div id="mtbva-header">
        <navigation/>
        <parallax :src="image"
                  :height="headerHeight">
            <div slot="hero"
                 class="hero-container">
                <div class="hero-content">
                    <transition appear
                                name="two-sec-fade"
                                v-on:enter="titleEntered">
                        <h1 v-if="showTitle"
                            :class="subpage ? 'subpage-title' : 'mtbva-title'"
                            id="mtbva-title">
                            {{title}}
                        </h1>
                    </transition>
                    <transition appear
                                name="two-sec-fade"
                                v-on:enter="subtitleEntered">
                        <h2 class="white--text headline mtbva-subtitle"
                            v-if="showSubtitle"
                            id="mtbva-subtitle">
                            {{subtitle}}
                        </h2>
                    </transition>
                    <transition appear
                                name="two-sec-fade">
                        <a v-if="buttonLink && showHeroButton"
                           :href="buttonLink"
                           class="button-link"
                           id="events-button">
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
  import {s3StaticImg} from "../../scripts/routes"

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
      subpage: {
        type: Boolean,
        required: false,
        default: false
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
        img: `${s3StaticImg}`,
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
    .hero-container {
    }

    .hero-content {
        padding: 1rem;
        text-align: center;
        position: absolute;
        top: 75%;
        left: 50%;
        width: 100%;
        height: 500px;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 720px) {
        .hero-content {
            top: 50%;
        }
    }

    .mtbva-title {
        font-size: 6rem;
    }

    @media (max-width: 550px) {
        .mtbva-title {
            font-size: 4rem;
        }

        .mtbva-subtitle {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 450px) {
        .mtbva-title {
            font-size: 3rem;
        }

        .mtbva-subtitle {
            font-size: 1rem;
        }
    }

    .subpage-title {
        text-shadow: 0px 3px 3px rgb(0, 0, 0);
        font-size: 5em;
    }

    @media (max-width: 550px) {
        .subpage-title {
            font-size: 3rem;
        }
    }

    .button-link {
        color: transparent;
    }

    .two-sec-fade-enter-to {
        transition: opacity 2s;
    }

    .two-sec-fade-enter {
        opacity: 0;
    }
</style>

<style scoped>
    .white-btn {
        width: 200px;
    }
</style>
