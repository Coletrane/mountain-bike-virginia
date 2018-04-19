<template>
  <card>
    <div slot="content">
      <div class="words">
        <div class="row">
          <div class="col-10
                      col-sm-9
                      col-md-9
                      col-lg-9
                      col-xl-9">
            <nuxt-link v-if="postRoute && !blogPost"
                       :to="{name: post.route}">
              <h2 v-if="!noPostTitle"
                  class="headline">{{post.title}}
              </h2>
              <h3 class="subheading">
                {{post.subtitle}}
              </h3>
                <h4>
                  {{post.date}}
                </h4>
                <h4 v-if="post.loc">
                  {{post.loc}}
                </h4>
            </nuxt-link>
            <div v-else>
              <h2 v-if="!noPostTitle"
                  class="headline">{{post.title}}
              </h2>
              <h3 class="subheading">
                {{post.subtitle}}
              </h3>
                <h4>
                  {{post.date}}
                </h4>
                <h4 v-if="post.loc">
                  {{post.loc}}
                </h4>
            </div>
            <div v-if="!authorSeparateDiv">
              <author v-if="!noAuthor && headerAuthor"
                      :author="post.author"/>
              <slot name="header"/>
            </div>
          </div>
          <social-actions :post="post"
                          class="col-2
                                 col-sm-3
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

  import postRoute from '../../assets/mixins/post-route'

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
      blogPost: {
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
    mixins: [
      postRoute
    ],
    computed: {
      formattedDate() {
        if (this.post.date) {
          return new Date()
        }
      }
    }
  }
</script>
<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    font-weight: 800;
  }
  h3 {
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;
  }
  h4 {
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
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

