<template>
  <card>
    <div slot="content">
    <div class="words">
      <div class="row">
        <nuxt-link :to="post.route"
                   class="col-8">
          <h2 class="headline">{{post.title}}</h2>
          <h4 class="subheading">{{post.subtitle}}</h4>
        </nuxt-link>
        <social-actions :post="post"
                        class="col-4 social-right"/>
      </div>
      <div class="promo">
        <slot name="words"/>
      </div>
    </div>
    <slot name="media"/>
    </div>
  </card>
</template>
<script>
  import Card from "./Card"
  import SocialActions from "./SocialActions"

  export default {
    name: "post-card",
    props: {
      post: {
        required: true
      }
    },
    components: {
      Card,
      SocialActions
    }
  }
</script>
<style>
  .post-card-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 900px) {
    i.fa-facebook {
      padding-right: 1rem;
    }
  }
</style>
<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  .words {
    padding: 1rem;
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

