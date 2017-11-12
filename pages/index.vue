<template>
  <div class="blog">
    <m-t-b-v-a-header
      :header-height="800"
      :image="img + 'foliage.png'"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Ride or Race with us"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
        <v-layout row wrap align-center>

          <div v-if="page === 1 && $route.path === '/'">

          <post-card
            :post="spec"
            :isLink="true">
            <div slot="top">
              <post-header :post="spec"></post-header>
            </div>

            <div slot="middle">
              <img :src="spec.img">
            </div>
          </post-card>

            <post-card
              :post="swbl"
              :isLink="true">
              <div slot="top">
                <post-header :post="swbl"></post-header>
                <div class="promo">
                  With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not enduro, it's not trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
                </div>
              </div>

              <div slot="middle">
                <img :src="swbl.img">
              </div>
            </post-card>

            <post-card
              :post="cr17"
              isLink="true">
              <div slot="top">
                <post-header :post="cr17"></post-header>
                <div class="promo">
                  Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive.
                </div>
                <div class="promo">
                  <nuxt-link :to="'results'">
                    View the results here.
                  </nuxt-link>
                </div>
              </div>
              <div slot="middle">
                <youtube :src="cr17.ytSrc"></youtube>
              </div>
            </post-card>

            <post-card
              :post="re"
              isLink="true">
              <div slot="top">
                <post-header :post="re"></post-header>
              </div>
              <div slot="middle">
                <img :src="re.img">
              </div>
            </post-card>

            <post-card
              :post="cr16"
              isLink="true">
              <div slot="top">
                <post-header :post="cr16"></post-header>
                <div class="promo">
                  The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were even graced by the presence of the fantastic Mr. <a href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still managed to take first despite starting 3 minutes late.
                </div>
                <div class="promo">
                  <nuxt-link :to="'results'">
                    View the results here.
                  </nuxt-link>
                </div>
              </div>
              <div slot="middle">
                <youtube :src="cr16.ytSrc"></youtube>
              </div>
            </post-card>

          </div>

          <div v-if="page === 2">
          </div>

          <v-pagination :length="1"
                        v-model="page">
          </v-pagination>

        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import MTBVAHeader from '../components/MTBVAHeader.vue'
  import PostHeader from '../components/PostHeader.vue'
  import PostCard from '../components/PostCard.vue'
  import Youtube from '../components/Youtube.vue'

  import posts from '../assets/posts'

  export default {
    name: 'blog',
    components: {
      MTBVAHeader,
      PostHeader,
      PostCard,
      Youtube,
    },
    head() {
      const title = 'Mountain Bike Virginia'
      const desc = 'Rides, Races, and Reviews. XXC VA race series. Just 40 more miles.'
      return {
        title: title,
        meta: [
          {name: 'description', content: desc},
          {name: 'og:title', content: title},
          {name: 'og:description', content: desc},
          {name: 'og:type', content: 'website'},
          {name: 'og:url', content: process.env.baseUrl},
          {name: 'og:image', content: process.env.s3 + '/static/img/foliage.png'},
          {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails'},
        ]
      }
    },
    data() {
      return {
        img: process.env.s3 + '/static/img/',
        spec: posts['spec-mines-oct-29-2017'],
        swbl: posts['pivot-switchblade-review'],
        cr17: posts['creature-2017-recap'],
        re: posts['relaunch'],
        cr16: posts['creature-2016']
      }
    },
    computed: {
      page() {
        return parseInt(this.$route.name) || 1
      },
      posts() {
        return postsPages[this.page - 1]
      }
    }

  }
</script>

<style>
  @media screen and (min-width: 600px) {
    .container {
      max-width: 1200px !important;;
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .post-card {
    width: 100%
  }

  .post {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }



  .pagination {
    margin: auto
  }

  .application--light .pagination__item--active {
    background: rgba(80, 97, 111, 0.82) !important;
  }
</style>
