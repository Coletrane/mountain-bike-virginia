<template>
  <div id="mtbva-header">
    <navigation/>
    <parallax :src="image"
              :height="1000">
      <div slot="hero"
           class="hero-container">
        <div class="hero-content">
            <div>
              <h1 class="mtbva-title"
                  :class="subpageTitleClass"
                  id="mtbva-title">
                {{title.toUpperCase()}}
              </h1>
              <h2 class="white--text headline mtbva-subtitle"
                  id="mtbva-subtitle">
                {{subtitle}}
              </h2>
              <a v-if="buttonLink && button"
                 :href="buttonLink"
                 class="button-link"
                 id="events-button">
                <button class="btn btn-outline-primary white-btn">
                    {{button.toUpperCase()}}
                </button>
              </a>
            </div>
        </div>
      </div>
    </parallax>
  </div>
</template>
<script>
  import Navigation from './Navigation'
  import Parallax from './Parallax'
  import {s3StaticImg} from '../../scripts/routes'

  export default {
    name: 'mtbva-header',
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
        required: true
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
      },
      homePage: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        img: `${s3StaticImg}/`,
      }
    },
    computed: {
      subpageTitleClass() {
        if (this.$route.name !== 'index') {
          return 'mtbva-title-subpage'
        }
      }
    }
  }
</script>
<style>

  .hero-content {
    padding: 1rem;
    text-align: center;
    position: absolute;
    left: 50%;
    width: 100%;
    height: 500px;
    transform: translate(-50%, -50%);
    top: 60%
  }

  .mtbva-title {
    text-shadow: 4px 3px 3px rgb(0, 0, 0);
    font-size: 6rem;
  }
  .mtbva-title-subpage {
    font-size: 4rem;
  }
  .mtbva-subtitle {
    text-shadow: 4px 3px 3px rgb(0, 0, 0);
  }

  @media (max-width: 600px) {

    .mtbva-title {
      font-size: 4rem;
    }
    .mtbva-title-subpage {
      font-size: 3rem;
    }
    .mtbva-subtitle {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 450px) {
    .mtbva-title {
      font-size: 3rem;
    }
    .mtbva-title-subpage {
      font-size: 2rem;
    }
    .mtbva-subtitle {
      font-size: 1rem;
    }
  }

  .subpage-title {
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
    transition: opacity 2s ease;
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
