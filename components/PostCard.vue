<template>
  <card>
    <div slot="content">
      <div class="words">
        <div class="row">
          <div class="col-9 col-sm-10">
            <nuxt-link v-if="links"
                       :to="post.route">
              <h2 class="headline">{{post.title}}</h2>
              <h4 class="subheading">{{post.subtitle}}</h4>
              <slot name="author"/>
            </nuxt-link>
            <div v-else>
              <h2 class="headline">{{post.title}}</h2>
              <h4 class="subheading">{{post.subtitle}}</h4>
            </div>
          </div>
          <social-actions :post="post"
                          class="col-3 col-sm-2 social-right"/>
        </div>
        <slot name="words"/>
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
      },
      links: {
        required: false,
        default: true
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

  .subheading {
    font-family: 'Lato', sans-serif;
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
</style>

