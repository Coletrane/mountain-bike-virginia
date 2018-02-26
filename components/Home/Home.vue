<template>
  <div class="blog">

    <m-t-b-v-a-header
      :header-height="900"
      :image="img"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Events"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>

    <div class="main-content main-content-mobile">
      <transition-group name="new-page-fade"
                        appear>
        <div v-if="page >= 1"
             :key="1">

          <slot name="first"/>

          <post-card :post="posts.battleAtBlackhorse2018">
            <div slot="words">
              <div class="promo">
                23 miles, 3 stages, of absolute brutality from the Glenwood Horse trail, Hammin Hollow, and Dody Ridge
                trails. Congrats to the podium of this tough race:
                <ol>
                  <li>
                    Lucas Weaver 13:52
                  </li>
                  <li>
                    Micah Fontz 14:17
                  </li>
                  <li>
                    Matt Clements 14:19
                  </li>
                  <li>
                    Rob Hobson 14:26
                  </li>
                  <li>
                    Andrew Issem 15:13
                  </li>
                </ol>
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.battleAtBlackhorse2018"/>
            </div>
          </post-card>

          <slot name="second"/>

          <post-card :post="posts.gravelocity2018">
            <div slot="words">
              <div class="promo">
                Who wants to do a gravel ride? Okay how about a 54 mile one? Okay how about 20 degrees?
                Perfect. Let's ride. Once again Gravelocity had a great turnout with people coming from
                Fredricksburg, Virginia Beach, and even Cincinnati!
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.gravelocity2018"/>
            </div>
          </post-card>

          <post-card :post="posts.firstRide2018">
            <div slot="words">
              <div class="promo">
                For the 28th consecutive year the the first ride of the new year was a roaring
                (shivering) success.
                Thank you to everyone who turned out and cranked out some of the most frigid miles
                they'll have all
                year.
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.firstRide2018"/>
            </div>
          </post-card>

          <post-card :post="posts.dodyRidgeRunFall2017">
            <div slot="media">
              <youtube :src="posts.dodyRidgeRunFall2017.ytSrc"/>
            </div>
          </post-card>

          <post-card
            :post="posts.pivotSwitchbladeReview">
            <div slot="words">
              <div class="promo">
                With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not
                enduro, it's
                not
                trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
              </div>
            </div>
            <div slot="media">
              <image-link :post="posts.pivotSwitchbladeReview"/>
            </div>
          </post-card>
        </div>

        <div v-if="page >= 2"
             :key="2">

          <post-card :post="posts.creature2017Recap">
            <div slot="words">
              <div class="promo">
                Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success.
                Special thanks
                to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make
                the Creature
                come alive.
              </div>
              <div class="promo">
                <nuxt-link :to="'results'">
                  View the results here.
                </nuxt-link>
              </div>
            </div>
            <div slot="media">
              <youtube :src="posts.creature2017Recap.ytSrc"/>
            </div>
          </post-card>

          <post-card :post="posts.relaunch">
            <div slot="media">
              <image-link :post="posts.relaunch"/>
            </div>
          </post-card>

          <post-card :post="posts.specMines29Oct17">
            <div slot="media">
              <image-link :post="posts.specMines29Oct17"/>
            </div>
          </post-card>

          <post-card :post="posts.creature2016">
            <div slot="words">
              <div class="promo">
                The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing
                success. We
                were
                even graced by the presence of the fantastic Mr. <a
                href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still
                managed to take
                first despite starting 3 minutes late.
              </div>
            </div>
            <div class="promo">
              <nuxt-link :to="'results'">
                View the results here.
              </nuxt-link>
            </div>
            <div slot="media">
              <youtube :src="posts.creature2016.ytSrc"/>
            </div>
          </post-card>

        </div>
      </transition-group>

      <div v-if="page < maxPage"
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
  import MTBVAHeader from '../Header/MTBVAHeader.vue'
  import PostCard from '../Card/PostCard.vue'
  import Youtube from '../Iframes/Youtube.vue'
  import ImageLink from '../Images/ImageLink.vue'

  import {posts} from '../../assets/posts'
  import {s3StaticImg, s3Pages, imgRoutes, baseUrl} from '../../scripts/routes'
  import * as routes from '../../scripts/routes'
  import RideWithGps from '../Iframes/RideWithGps'
  import FacebookLink from '../Images/FacebookLink'

  const foliage = `${s3StaticImg}${imgRoutes['/']}`

  export default {
    name: 'home',
    components: {
      FacebookLink,
      RideWithGps,
      MTBVAHeader,
      PostCard,
      Youtube,
      ImageLink
    },
    data() {
      return {
        img: foliage,
        attachPosts: false,
        posts: posts,
        routes: routes,
        maxPage: 2,
        fbIcon: `${s3StaticImg}fb-black.svg`,
        mmmFb: 'https://www.facebook.com/events/371981453213164/',
        s3Pages: s3Pages,
        s3StaticImg: s3StaticImg
      }
    },
    created() {
      if (process.browser) {
        // Change the og:image location based on the route
        // This is only needed because the head() function above is not exposed to the Vue instance
        let ogImage = document.querySelector('meta[property=\'og:image\']')
        let ogUrl = document.querySelector('meta[property=\'og:url\']')

        if (ogImage && ogUrl) {
          if (this.$route.name === routes.rockstarVa2018) {

            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${s3Pages}${routes.rockstarVa2018}/${imgRoutes[routes.rockstarVa2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${baseUrl}/${routes.rockstarVa2018}`)

          } else if (this.$route.name === routes.middleMtMomma2018) {

            ogImage.removeAttribute('content')
            ogImage.setAttribute('content', `${s3Pages}${routes.middleMtMomma2018}/${imgRoutes[routes.middleMtMomma2018]}`)

            ogUrl.removeAttribute('content')
            ogUrl.setAttribute('content', `${baseUrl}/${routes.middleMtMomma2018}`)

          }
        }
      }
    },
    computed: {
      page() {
        return this.$store.state.page
      }
    },
    methods: {
      loadMore() {
        const newPage = this.page + 1
        this.$store.commit('changePage', newPage)
      }
    }
  }
</script>

<style>
  .main-content {

  }

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
