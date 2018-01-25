<template>
  <div class="blog">
    <m-t-b-v-a-header
      :header-height="800"
      :image="img"
      title="Mountain Bike Virginia"
      subtitle="Exposing the trove of trails in The Old Dominion"
      button="Events"
      buttonLink="https://www.facebook.com/pg/xxcva/events/">
    </m-t-b-v-a-header>
    <div class="main-content main-content-mobile">
      <div v-if="page >= 1"
           :key="1">
        <post-card :post="posts.middleMtMomma2018">
          <div slot="words">
            <div class="promo">
              21st annual Middle Mountain Momma at the gorgeous <a href="http://www.dcr.virginia.gov/state-parks/douthat#general_information">Douthat State Park.</a> The first race in the XXC VA series!
              <div>
                Classes:
              <ul>
                <li>Youth: 7mi</li>
                <li>Junior: 11mi</li>
                <li>Classic: 21mi</li>
                <li>XXC: 44mi</li>
              </ul>
              </div>
              <div>
              <a href="https://www.bikereg.com/county-of-bath-middle-mountain-momma">Register on BikeReg</a>
              </div>
              <div>
              <a href="">
                <img class="fb-icon"
                     :src="fbIcon"/>
                Event
              </a>
              </div>
            </div>
            <div slot="media">
              <div class="row">
              <image-link :post="posts.middleMtMomma2018"
                          :href="posts.middleMtMomma2018.extraImgs.logo"
                          :src=""/>
              <image-link :post="posts.middleMtMomma2018"
                          :href="posts.middleMtMomma2018.extraImgs.start"
                          :src="s3Pages + 'mmm-start.gif'"/>
              </div>
              <ride-with-gps :url="posts.middleMtMomma2018.rwGps"/>
            </div>
          </div>
        </post-card>
        <post-card :post="posts.firstRide2018">
          <div slot="words">
            <div class="promo">
              For the 28th consecutive year the the first ride of the new year was a roaring (shivering) success.
              Thank you to everyone who turned out and cranked out some of the most frigid miles they'll have all
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
              With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not enduro, it's
              not
              trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
            </div>
          </div>
          <div slot="media">
            <image-link :post="posts.pivotSwitchbladeReview"/>
          </div>
        </post-card>
        <post-card :post="posts.creature2017Recap">
          <div slot="words">
            <div class="promo">
              Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks
              to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature
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
      </div>
      <div v-if="page >= 2"
           :key="2">
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
              The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We
              were
              even graced by the presence of the fantastic Mr. <a
              href="https://en.wikipedia.org/wiki/Jeremiah_Bishop">Jeremiah Bishop</a> who still managed to take
              first despite starting 3 minutes late.
            </div>
            <div class="promo">
              <nuxt-link :to="'results'">
                View the results here.
              </nuxt-link>
            </div>
          </div>
          <div slot="media">
            <youtube :src="posts.creature2016.ytSrc"/>
          </div>
        </post-card>
      </div>
      <div v-if="page < maxPage"
           class="load-more">
        <button class="btn btn-outline-primary white-btn"
                @click="loadMore()">
            Keep on Riding!
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from "../components/MTBVAHeader.vue"
  import PostCard from "../components/PostCard.vue"
  import Youtube from "../components/Youtube.vue"
  import ImageLink from "../components/ImageLink.vue"

  import {posts} from "../assets/posts"
  import * as routes from "../routes"
  import {headTags} from "../assets/functions"
  import RideWithGps from "../components/RideWithGps"

  const foliage = routes.s3 + routes.s3StaticImg + routes.imgRoutes["/"]

  export default {
    name: "blog",
    components: {
      RideWithGps,
      MTBVAHeader,
      PostCard,
      Youtube,
      ImageLink
    },
    head() {
      return headTags(
        "Mountain Bike Virginia",
        "Rides, Races, and Reviews. XXC VA race series. Just 40 more miles.",
        "mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails",
        {
          imgSrc: foliage
        }
      )
    },
    data() {
      return {
        img: foliage,
        attachPosts: false,
        posts: posts,
        maxPage: 2,
        fbIcon: `${routes.s3}${routes.s3StaticImg}fb-black.svg`,
        mmmFb: "https://www.facebook.com/events/371981453213164/",
        s3Pages: `${routes.s3}${routes.s3Pages}`
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
        this.$store.commit("changePage", newPage)
      }
    }
  }
</script>
<style scoped>
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
</style>
