<template>
  <div class="parallax"
       :style="styles">
    <div class="hero">
      <slot name="hero"/>
    </div>
  </div>
</template>
<script>
import responsiveImg from "../../mixins/responsive-img"

export default {
  name: "parallax",
  props: {
    alt: {
      type: String,
      required: false,
      default: "Mountain Bike Virginia"
    }
  },
  mixins: [responsiveImg],
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      let scrolled = window.pageYOffset
      let limit = this.$el.offsetTop + this.$el.offsetHeight
      let backgroundPos
      if (scrolled > this.$el.offsetTop && scrolled <= limit) {
        backgroundPos = (scrolled - this.$el.offsetTop) / 3
      } else {
        backgroundPos = 0
      }
      window.requestAnimationFrame(() => {
        this.$el.style.backgroundPositionY = `${backgroundPos}px`
      })
    }
  },
  computed: {
    styles() {
      console.log(this.url)
      return {
        backgroundImage: `url(${this.url})`
      }
    }
  }
}
</script>
<style scoped>
.parallax {
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-position-x: center;
  background-position-y: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1200px;
}

.hero {
  color: white;
  height: 100%;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
}

@media (max-width: 700px) {
  .parallax {
    height: 900px;
  }
}

@media (max-width: 450px) {
  .parallax {
    height: 720px;
  }
}

@media (max-width: 350px) {
  .parallax {
    height: 580px;
  }
}
</style>
