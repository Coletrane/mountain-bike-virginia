<template>
  <div class="post-card-container">
    <div class="post-card"
         :style="postCardStyle">
      <div class="words">
        <div class="headline-cols">
          <nuxt-link :to="post.route">
            <h2 class="headline">{{post.title}}</h2>
          </nuxt-link>
          <social-actions :post="post"
                          class="social-right"/>
        </div>
        <nuxt-link :to="post.route">
          <h4 class="subheading">{{post.subtitle}}</h4>
        </nuxt-link>
        <div class="promo">
        <slot name="words"/>
        </div>
      </div>
      <slot name="media"/>
    </div>
  </div>
</template>
<script>
  import SocialActions from "./SocialActions.vue"
  import {boxShadow} from "../assets/styles"

  export default {
    name: "post-card",
    props: {
      post: {
        required: true
      }
    },
    components: {
      SocialActions
    },
    data() {
      return {
        postCardStyle: {
          boxShadow: boxShadow
        }
      }
    }
  }
</script>
<style>
  .post-card-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
</style>
<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  .post-card {
    background-color: rgba(255, 255, 255, .85);
  }

  .words {
    padding: 1rem;
  }

  .headline-cols {
    display: grid;
    grid-template-columns: 75% 25%;
  }

  .social-right {
    text-align: right;
  }

  img {
    width: 100%;
  }

  h4 {
    font-family: 'Lato', sans-serif;
  }

  .promo {
    font-size: 1rem;
  }
</style>

