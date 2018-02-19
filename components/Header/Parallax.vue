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
        type: Number,
        default: 600
      },
      jumbotron: Boolean,
      src: String
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
      }
    },
    mounted() {
      this.handleResize()
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
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
      },
      handleResize() {
        if (document.body.clientWidth <= 600) {
          this.$el.style.height = `${this.height - 300}px`
        } else {
          this.$el.style.height = `${this.height}px`
        }
      }
    },
    computed: {
      styles() {
        return {
          height: `${this.height}px`,
          backgroundImage: `url(${this.src})`
        }
      },
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
