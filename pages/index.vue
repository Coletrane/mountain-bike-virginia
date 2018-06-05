<template>
  <div class="blog">
    <m-t-b-v-a-header :image="img"
                      title="Mountain Bike Virginia"
                      subtitle="Exposing the trove of trails in The Old Dominion"
                      button="Events"
                      buttonLink="https://www.facebook.com/pg/bikevirginia/events/"
                      home-page/>
    <banner/>
    <div class="main-content"
         :style="backgroundImage">
      <div v-for="(page, i) of pages">
        <component v-if="$store.state.routes.currentPage >= i"
                   :is="AbstractPage"
                   v-bind="{page: i}"/>
        <m-t-b-v-a-footer v-if="i === 0"/>
      </div>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from '../components/Header/MTBVAHeader'
  import Banner from '../components/Das/Banner'
  import MTBVAFooter from '../components/Footer/MTBVAFooter'

  import {home} from '../assets/head-tags'
  import {headTags} from '../assets/functions'
  import {s3StaticImg, s3Banners} from '../scripts/routes'
  import backgroundImage from '../assets/mixins/background-image'

  const foliage = `${s3StaticImg}/foliage.jpg`

  export default {
    name: 'index',
    components: {
      MTBVAHeader,
      Banner,
      MTBVAFooter
    },
    mixins: [
      backgroundImage
    ],
    async asyncData(context) {
      await context.store.dispatch('loadPage', 0)
      return await context.store.dispatch(
        'loadPosts',
        context.store.state.routes.pages[0])
    },
    head() {
      return headTags(
        home.title,
        home.description,
        home.keywords,
        {
          route: this.$route.path,
          ogImage: foliage
        }
      )
    },
    data() {
      return {
        img: foliage,
        s3Banners: s3Banners,
        pages: new Array(3),
        AbstractPage: () => import('../components/AbstractPage')
      }
    },
    mounted() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    },
    computed: {
      showLoadMore() {
        return this.$store.state.routes.currentPage <
               this.$store.state.routes.numberOfPages - 1
      }
    },
    methods: {
      handleScroll() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          this.loadMore()
        }
      },
      async loadMore() {
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

</style>

