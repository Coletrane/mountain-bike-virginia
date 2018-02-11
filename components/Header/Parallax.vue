<template>
  <div class="parallax"
       :style="styles">
    <div class="hero">
      <slot name="hero"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'parallax',
    props: {
      alt: String,
      height: {
        type: [String, Number],
        default: 500
      },
      jumbotron: Boolean,
      src: String
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    methods: {
      handleScroll() {
        window.requestAnimationFrame(() => {
          let scrolled = window.pageYOffset
          let limit = this.$el.offsetTop + this.$el.offsetHeight
          if (scrolled > this.$el.offsetTop && scrolled <= limit) {
            this.$el.style.backgroundPositionY = `${(scrolled - this.$el.offsetTop) / 2.5}px`;
          } else {
            this.$el.style.backgroundPositionY = "-0px";
          }
        })
      }
    },
    computed: {
      styles() {
        return {
          height: `${this.height}px`,
          backgroundImage: `url(${this.src})`
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
  }

  .hero {
    color: #FFFFFF;
    height: 100%;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

</style>
