<template>
  <img v-lazy="url"
       :class="portrait ? 'portrait' : 'landscape'"/>
</template>
<script>
  import {
    noExtension,
    justExtension
  } from "../assets/functions"

  export default {
    name: "responsive-img",
    props: {
      src: {
        type: String,
        required: true
      },
      portrait: {
        default: false
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
  img[lazy=loading] {
    width: 20%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25%;
    margin-bottom: 25%;
  }

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
