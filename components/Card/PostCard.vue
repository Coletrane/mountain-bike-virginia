<template>
  <card>
    <div slot="content">
      <div class="words">
        <div class="row">
          <div class="col-9 col-sm-10">
            <a v-if="link"
               :href="link">
              <h2 class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <slot name="author"/>
            </a>
            <router-link v-else-if="!link && post.route"
                         :to="{name: post.route}"
                         exact>
              <h2 class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <slot name="author"/>
            </router-link>
            <div v-else>
              <h2 class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <slot name="author"/>
            </div>
          </div>
          <social-actions :post="post"
                          class="col-3 col-sm-2 social-right"/>
        </div>
        <slot name="words"/>
      </div>
      <div class="mtbva-media">
        <slot name="media"/>
      </div>
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
      link: {
        required: false
      }
    },
    components: {
      Card,
      SocialActions
    },
    computed: {
      linkIsRoute() {
        return !this.link.includes('http')
      },
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

  .headline {
    font-weight: 800;
  }
  .subheading {
    font-size: 1.5rem;
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

