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

    <banner-ad href="https://viralstyle.com/store/angelo-wash/Sketchcollect"
               :img="s3Ads + '/sketch-collect/sketch-collect-banner.jpg'"/>

    <div class="main-content"
         :style="backgroundImage">

      <page-0 v-if="$store.state.routes.currentPage >= 0"
              :key="0"/>
      <page-1 v-if="$store.state.routes.currentPage >= 1"
              :key="1"/>

      <div v-if="showLoadMore"
           class="load-more">
        <button class="btn btn-outline-primary white-btn"
                @click="loadMore()"
                id="load-more-btn">
          NEXT PAGE
        </button>
      </div>

    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import BannerAd from '../components/Ads/BannerAd'
  import { home } from '../assets/head-tags'
  import { headTags } from '../assets/functions'
  import { s3StaticImg, s3Ads } from '../scripts/routes'

  // Pages
  const Page0 = () => import('../components/BlogPages/Page0')
  const Page1 = () => import('../components/BlogPages/Page1')

  export default {
    name: 'index',
    components: {
      MTBVAHeader,
      BannerAd,
      Page0,
      Page1
    },
    async asyncData (context) {
      await context.store.dispatch('loadPage', 0)
      return await context.store.dispatch(
        'loadPosts',
        context.store.state.routes.pages[0])
    },
    head () {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        {
          route: '/'
        }
      )
    },
    data () {
      return {
        img: `${s3StaticImg}/foliage.jpg`,
        s3Ads: s3Ads
      }
    },
    computed: {
      backgroundImage () {
        return {
          backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`
        }
      },
      showLoadMore () {
        return this.$store.state.routes.currentPage <
               this.$store.state.routes.numberOfPages - 1
      }
    },
    methods: {
      async loadMore () {
        await this.$store.dispatch('incrementPage')
      }
    }
  }
</script>
<style>
  .load-more {
    text-align: center;
    padding-top: 2rem;
  }

  .card-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .promo {
    font-size: 1rem;
  }
</style>

