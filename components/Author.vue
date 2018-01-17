<template>
  <div class="author-container"
       :class="inline ? '' : 'float'">
    <a :href="author.fbUrl">
      <img class="author-pic"
           :src=author.imgUrl
           :alt="author.name">
      <div class="name-container">
        <span class="name">
        {{author.name}}
        </span>
        <img v-if="author.fbUrl"
             class="fb-icon"
             :src="fbIconSrc"/>
      </div>
    </a>
  </div>
</template>
<script>
  import {s3, s3StaticImg} from "../routes"

  export default {
    name: "author",
    props: {
      author: {
        type: Object,
        required: true
      },
      inline: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        fbIconSrc: `${s3}${s3StaticImg}fb-black.svg`
      }
    }
  }
</script>
<style scoped>
  .author-container {
    width: 40%;
    text-align: center;
    padding-top: 3.2rem;
    max-width: 180px;
  }

  .float {
    float: left;
  }

  .author-pic {
    border-radius: 50%;
    width: 50%;
  }

  .name-container {
    padding-bottom: 1rem;
  }

  .name {
    padding-right: .5rem;
  }
  .fb-icon {
    vertical-align: text-bottom;
  }
</style>
