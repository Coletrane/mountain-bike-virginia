<template>
  <card>
    <div slot="content">
      <div class="words">
        <div class="row">
          <div class="col-9 col-sm-10">
            <nuxt-link v-if="titleLink"
                       :to="{name: post.route}"
                       exact>
              <h2 v-if="!noPostTitle"
                  class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <div v-if="post.date">
                {{post.date.format('MMMM Do, YYYY')}}
              </div>
              <div v-if="post.loc">
                {{post.loc}}
              </div>
            </nuxt-link>
            <div v-else>
              <h2 v-if="!noPostTitle"
                  class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <div v-if="post.date">
                {{post.date.format('MMMM Do, YYYY')}}
              </div>
              <div v-if="post.loc">
                {{post.loc}}
              </div>
            </div>
            <author v-if="!noAuthor && headerAuthor"
                    :author="post.author"/>
          </div>
          <social-actions :post="post"
                          class="col-3 col-sm-2 social-right"/>
        </div>
        <slot name="words"/>
      </div>
      <div class="mtbva-media">
        <author v-if="!noAuthor && !headerAuthor"
                :author="post.author"/>
        <slot name="media"/>
      </div>
    </div>
  </card>
</template>
<script>
  import Card from "./Card"
  import SocialActions from "./SocialActions"
  import Author from './Author'

  export default {
    name: "post-card",
    props: {
      post: {
        required: true
      },
      noPostTitle: {
        type: Boolean,
        required: false,
        default: false
      },
      headerAuthor: {
        type: Boolean,
        required: false,
        default: false
      },
      noAuthor: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    components: {
      Card,
      SocialActions,
      Author
    },
    computed: {
      titleLink() {
        if (this.post.route !== ' ') {
          return this.post.route
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

