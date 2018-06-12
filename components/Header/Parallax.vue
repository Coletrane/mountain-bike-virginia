<template>
  <div class="parallax"
       :style="">
    <img :src="src"
         :alt="alt"
         class="hero-image"/>
    <div class="hero-text">
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
    z-index: -1;
    background-position-x: center;
    background-position-y: 0px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 1200px;
  }
  @media (max-width: 1000px) {
    .parallax {
      height: 900px;
    }
  }
  @media (max-width: 700px) {
    .parallax {
      height: 720px;
    }
  }

  .hero-image {
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
  }
  @media (max-width: 1000px) {
    .hero-image {
      width: 130%;
      left: -12%;
    }
  }
  @media (max-width: 700px) {
    .hero-image {
      width: 200%;
      left: -44%;
      top: -10%;
    }
  }

  .hero-text {
    color: white;
    height: 100%;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }

</style>
