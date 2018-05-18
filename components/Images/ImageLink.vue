<template>
  <nuxt-link v-if="postRoute"
             :to="{name: postRouteName}">
    <responsive-img :src="img"
                    :alt="post.title"/>
  </nuxt-link>
  <a v-else-if="href"
     :href="href">
    <responsive-img :src="img"
                    :alt="post.title"/>
  </a>
  <responsive-img v-else
                  :src="img"
                  :alt="post.title"/>
</template>
<script>
  import ResponsiveImg from './ResponsiveImg'

  import postRoute from '../../assets/mixins/post-route'

  import { s3Pages } from '../../scripts/routes'

  export default {
    components: {ResponsiveImg},
    name: 'image-link',
    props: {
      post: {
        required: true,
        type: Object
      },
      href: {
        type: String
      },
      src: {
        type: String
      }
    },
    components: {
      ResponsiveImg
    },
    mixins: [
      postRoute
    ],
    computed: {
      img() {
        if (this.src) {
          return this.src
        } else {
          return `${s3Pages}/${this.post.route}/${this.post.imgRoute}`
        }
      }
    }
  }
</script>
<style scoped>
  div {
    min-height: 400px;
  }

  @media (max-width: 576px) {
    div {
      min-height: 200px;
    }
  }

  img {
    width: 100%;
  }
</style>
