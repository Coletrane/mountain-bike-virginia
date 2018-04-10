<template>
  <div class="related-posts">

    <h1 class="related-posts-title">Related Posts</h1>

    <div v-for="post in posts"
         class="related-post">
      <component v-if="getPostComponent(post.route)"
                 :is="getPostComponent(post.route)"/>
    </div>
  </div>
</template>

<script>
  import {s3Pages, imgRoutes} from '../../scripts/routes'

  import postComponentLoader from '../../assets/mixins/post-component-loader'

  export default {
    name: 'half-card',
    props: {
      posts: {
        required: true
      }
    },
    mixins: [
      postComponentLoader
    ],
    methods: {
      image(post) {
        return `${s3Pages}/${post.route}/${imgRoutes[post.route]}`
      }
    }
  }
</script>

<style scoped>
  .related-posts {
    padding-top: 2rem;
  }

  .related-post {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .related-posts-title {
    text-align: center;
    color: white;
    font-weight: 800;
    margin: 0;
  }

</style>