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
    background-attachment: fixed;
    background-position: center;
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
