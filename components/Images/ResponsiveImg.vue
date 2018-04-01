<template>
  <img v-lazy="url"
       :class="portrait ? 'portrait' : 'landscape'"
       :alt="alt"/>
</template>
<script>
  import {
    noExtension,
    justExtension
  } from "../../assets/functions"

  export default {
    name: "responsive-img",
    props: {
      src: {
        type: String,
        required: true
      },
      portrait: {
        default: false
      },
      alt: {
        type: String,
        default: 'Mountain Bike Virginia'
      }
    },
    computed: {
      url() {
        let result
        const filename = noExtension(this.src)
        const extension = justExtension(this.src)

        if (filename && extension) {
          if (process.browser) {

            if (document.body.clientWidth <= 700) {
              result = `${filename}-700px${extension}`
            } else {
              result = this.src
            }
          }
        } else {
          // Default to full size image
          result = this.src
        }

        return result
      }
    }
  }
</script>
<style>

  .landscape[lazy=loaded] {
    width: 100% !important;
  }

  .portrait[lazy=loaded] {
    width: 50%;
    display: block;
    margin: auto;
  }

  @media (max-width: 450px) {
    .portrait[lazy=loaded] {
      width: 100%;
    }
  }


</style>
