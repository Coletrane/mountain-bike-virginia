<template>
  <div class="related-posts">

    <h1 class="related-posts-title">Related Posts</h1>

    <div v-for="group in postsGroups"
         class="row related-post-group">
      <div v-for="post in group"
           class="related-post col-xs-12 col-s-6 col-md-6 col-lg-6 col-xl-6">
        <nuxt-link :to="post.route">
          <card>
            <div slot="content">
              <h3 class="related-post-title">{{post.title}}</h3>
              <responsive-img :src="image(post)"
                              :alt="post.name"
                              class="related-post-image"/>
            </div>
          </card>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card'
  import * as routes from '../../scripts/routes'
  import ResponsiveImg from '../Images/ResponsiveImg'

  export default {
    name: 'half-card',
    props: {
      posts: {
        required: true
      }
    },
    components: {
      ResponsiveImg,
      Card
    },
    methods: {
      image(post) {
        return `${routes.s3Pages}${post.route}/${routes.imgRoutes[post.route]}`
      },
      handleResize() {
        this.width = document.body.clientWidth
      }
    },
    computed: {
      postsGroups() {
        let groups = []

        this.posts.forEach((elem, i, arr) => {
          if (i % 2 === 0) {
            groups.push([
              this.posts[i],
              this.posts[i + 1]
            ])
          }
        })

        return groups
      }
    }
  }
</script>

<style scoped>
  .related-posts {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .related-posts-title {
    text-align: center;
    color: white;
    padding-bottom: 2rem;
    font-weight: 800;
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .related-post {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    .related-post {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .related-post + .related-post {
      margin-top: 3rem;
    }
  }

  .related-post-title {
    padding: .5rem;
    margin: 0;
    font-weight: 800;
    text-align: center;
  }

</style>