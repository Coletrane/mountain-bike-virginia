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

        <div v-for="page of $store.state.posts.totalPages">
          <transition-group name="new-page-fade"
                            appear>
          <div v-if="$store.state.posts.currentPage >= page"
               :key="page">
            <component :is="getPage(page)"/>
          </div>
          </transition-group>
        </div>

      <div v-if="showLoadMore"
           class="load-more">
        <button class="btn btn-outline-primary white-btn"
                @click="loadMore()"
                id="load-more-btn">
          Keep Pedaling!
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import PostCard from '../components/Card/PostCard'
  import Youtube from '../components/Iframes/Youtube'
  import ImageLink from '../components/Images/ImageLink'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  // Pages
  const Page1 = () => import('../components/BlogPages/Page1')
  const Page2 = () => import('../components/BlogPages/Page2')

  import {home} from '../assets/head-tags'
  import {headTags} from '../assets/functions'
  import * as routes from '../scripts/routes'

  export default {
    name: 'index',
    components: {
      RideWithGps,
      MTBVAHeader,
      PostCard,
      Youtube,
      ImageLink,
      FontAwesomeIcon,
      Page1,
      Page2
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
        img: `${routes.s3StaticImg}/${routes.imgRoutes['/']}`,
        faFacebook: faFacebook,
        attachPosts: false,
        routes: routes,
        pages: [
          Page1,
          Page2,
        ]
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage:`url("${routes.s3StaticImg}/asfalt-light.png")`
        }
      },
      showLoadMore() {
        return this.$store.state.posts.currentPage < this.$store.state.posts.totalPages
      }
    },
    methods: {
      async loadMore() {
        await this.$store.dispatch('incrementPage')
      },
      getPage(page) {
        return this.pages[page - 1]
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

  .image-smaller {
    width: 60%;
    display: block;
    margin: auto;
  }

  @media (max-width: 720px) {
    .image-smaller {
      width: 100%;
    }
  }

  .new-page-fade-enter-to {
    transition: opacity 1s;
  }

  .new-page-fade-enter {
    opacity: 0;
  }

</style>

