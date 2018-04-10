<template>
  <card>
    <div slot="content">
      <div class="words">
        <div class="row">
          <div class="col-10
                      col-sm-10
                      col-md-9
                      col-lg-9
                      col-xl-9">
            <nuxt-link v-if="titleLink"
                       :to="titleLink"
                       exact>
              <h2 v-if="!noPostTitle"
                  class="headline">{{post.title}}</h2>
              <span class="subheading">{{post.subtitle}}</span>
              <div v-if="post.date">
                {{post.date}}
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
                {{post.date}}
              </div>
              <div v-if="post.loc">
                {{post.loc}}
              </div>
            </div>
            <div v-if="!authorSeparateDiv">
              <author v-if="!noAuthor && headerAuthor"
                      :author="post.author"/>
              <slot name="header"/>
            </div>
          </div>
          <social-actions :post="post"
                          class="col-2
                                 col-sm-2
                                 col-md-3
                                 col-lg-3
                                 col-xl-3
                                 social-right"/>
        </div>

        <div v-if="authorSeparateDiv">
          <author v-if="!noAuthor && headerAuthor"
                  :author="post.author"/>
          <slot name="header"/>
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
  import Card from './Card'
  import SocialActions from './SocialActions'
  import Author from './Author'

  export default {
    name: 'post-card',
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
      },
      authorSeparateDiv: {
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
        if (this.post.route !== ' ' &&
          this.$router.options.routes.find(route => route.name === this.post.route)) {
          return {name: this.post.route}
        }
      },
      formattedDate() {
        if (this.post.date) {
          return new Date()
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
    padding-left: 0;
  }

  img {
    width: 100%;
  }
</style>

