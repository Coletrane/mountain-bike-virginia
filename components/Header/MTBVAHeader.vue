<template>
  <div class="mtbva-header">
    <parallax :src="image">
      <div slot="hero"
           class="hero-container">
        <div class="hero-content"
             :style="mobileHeroStyles">
          <div>
            <h1 class="mtbva-title"
                :class="subpageTitleClass">
              {{title.toUpperCase()}}
            </h1>
            <h2 class="white--text headline mtbva-subtitle">
              {{subtitle}}
            </h2>
            <a v-if="buttonLink && button"
               :href="buttonLink"
               class="button-link">
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
import Parallax from "./Parallax"

import { s3StaticImg } from "../../scripts/routes"
import isMobile from "../../assets/detect-mobile"

export default {
  name: "mtbva-header",
  components: {
    Parallax
  },
  props: {
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
      img: `${s3StaticImg}/`
    }
  },
  computed: {
    subpageTitleClass() {
      if (this.$route.name !== "index") {
        return "mtbva-title-subpage"
      }
    },
    // Important, if you check process.browser you MUST use inline styles and not class names
    mobileHeroStyles() {
      if (process.browser && isMobile() && this.$route.name === "index") {
        return {
          top: "42%"
        }
      }
    }
  }
}
</script>
<style>
.mtbva-header {
  background-color: black;
}

.hero-content {
  padding: 1rem;
  text-align: center;
  position: absolute;
  left: 50%;
  width: 100%;
  height: 500px;
  transform: translate(-50%, -50%);
  top: 60%;
}

@media (max-width: 450px) {
  .hero-content {
    top: 40%;
  }
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

@media (max-width: 700px) {
  .mtbva-title {
    font-size: 4rem;
  }

  .mtbva-title-subpage {
    font-size: 3rem;
  }

  .mtbva-subtitle {
    font-size: 1.5rem;
  }

  .hero-content {
    height: 300px;
  }
}

@media (max-width: 450px) {
  .mtbva-title {
    font-size: 3.5rem;
  }

  .mtbva-title-subpage {
    font-size: 2.5rem;
  }

  .mtbva-subtitle {
    font-size: 1.2rem;
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
