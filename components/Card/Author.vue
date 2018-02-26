<template>
  <div class="author-container">
    <div>
    <a :href="author.fbUrl">
      <img class="author-pic"
           :src=author.imgUrl
           :alt="author.name">
      <div class="name-container">
        <span class="name">
        {{author.name}}
        </span>
      </div>
    </a>
    </div>
    <div class="social-icons">
      <a :href="author.fbUrl">
        <i class="fab fa-facebook"></i>
      </a>
      <a v-if="author.stravaUrl"
         :href="author.stravaUrl">
        <i class="fab fa-strava"></i>
      </a>
    </div>
  </div>
</template>
<script>
  import {s3StaticImg} from "../../scripts/routes"

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
        fbIconSrc: `${s3StaticImg}fb-black.svg`
      }
    }
  }
</script>
<style scoped>
  .author-container {
    width: 40%;
    text-align: center;
    padding-top: 1.2rem;
    padding-bottom: 1rem;
    max-width: 180px;
    float: left;
  }

  .author-pic {
    border-radius: 50%;
    width: 50%;
  }

  .social-icons {
    text-align: center;
    font-size: 2rem;
  }
  .social-icons a {
    padding-left: .5rem;
    padding-right: .5rem;
  }

</style>
