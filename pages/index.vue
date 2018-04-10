<template>
  <div class="blog">

    <m-t-b-v-a-header
      :header-height="900"
      :image="img"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Events"
      buttonLink="https://www.facebook.com/pg/xxcva/events/"
      home-page>
    </m-t-b-v-a-header>

    <div class="main-content"
         :style="backgroundImage">

          <page-0 v-if="$store.state.posts.currentPage >= 0"
                  :key="0"/>
          <page-1 v-if="$store.state.posts.currentPage >= 1"
                  :key="1"/>

      <div v-if="showLoadMore"
           class="load-more">
        <button class="btn btn-outline-primary white-btn"
                @click="loadMore()"
                id="load-more-btn">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../components/Header/MTBVAHeader'

  // Pages
  const Page0 = () => import('../components/BlogPages/Page0')
  const Page1 = () => import('../components/BlogPages/Page1')

  import {home} from '../assets/head-tags'
  import {headTags} from '../assets/functions'
  import {
    s3StaticImg,
    imgRoutes
  } from '../scripts/routes'

  export default {
    name: 'index',
    components: {
      MTBVAHeader,
      Page0,
      Page1
    },
    async asyncData(context) {
      return {
        posts: await context.store.dispatch(
          'loadPosts',
          context.store.state.posts.pages[0])
      }
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        // Dummy "post" to simulate the base url
        // empty string because headTags adds in a slash
        {
          route: ''
        }
      )
    },
    data() {
      return {
        img: `${s3StaticImg}/${imgRoutes['/']}`
      }
    },
    async mounted() {
      if (this.$store.state.posts.currentPage === -1) {
        await this.$store.dispatch('incrementPage')
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`
        }
      },
      showLoadMore() {
        return this.$store.state.posts.currentPage < this.$store.state.posts.pages.length - 1
      }
    },
    methods: {
      async loadMore() {
        await this.$store.dispatch('incrementPage')
      }
    }
  }
</script>
<style>

  .load-more {
    text-align: center;
  }

  .card-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .promo {
    font-size: 1rem;
  }

</style>

