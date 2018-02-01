<template>
  <div>
  <nuxt-link
    :to="href ? href : post.route">
    <img v-lazy="src ? src : post.img"
         :data-srcset="srcset()"/>
  </nuxt-link>
  </div>
</template>
<script>
  export default {
    name: "image-link",
    props: {
      post: {
        required: true,
        type: Object
      },
      href: {
        type: String
      },
      src: {
        type: String
      }
    },
    methods: {
      srcset() {
        const phone = "480px"
        const tablet = "700px"
        const img = this.src ? this.src : this.post.img

        let splitStr
        if (img.endsWith(".jpg")) {
          splitStr = ".jpg"
        } else if (img.endsWith(".png")) {
          splitStr = ".png"
        } else if (img.endsWith(".jpeg")) {
          splitStr = ".jpeg"
        } else if (img.endsWith(".gif")) {
          splitStr = ".gif"
        } else {
          return ""
        }

        const imgPrefix = img.split(splitStr)[0]

        const result =
          `${imgPrefix}-${phone}.jpg ${phone}, ${imgPrefix}-${tablet}.jpg ${tablet}`
        console.log(result)
        return result
      }
    }
  }
</script>
<style scoped>
  div {
    min-height: 400px;
  }
  @media (max-width: 576px) {
    div {
      min-height: 200px;
    }
  }

  img {
    width: 100%;
  }
</style>
