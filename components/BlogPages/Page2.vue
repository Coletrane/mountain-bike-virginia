<template>
  <div>
    <post-card :post="$store.getters.getPost(routes.dodyRidgeRunFall2017)"
               no-author>
      <div slot="media">
        <youtube :src="$store.getters.getPost(routes.dodyRidgeRunFall2017).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.pivotSwitchbladeReview)"
               no-author>
      <div slot="words">
        <div class="promo">
          With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not
          enduro, it's
          not
          trail. Perhaps they should have called it the Swiss Army. No, that would never fly.
        </div>
      </div>
      <div slot="media">
        <image-link :post="$store.getters.getPost(routes.pivotSwitchbladeReview)"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.creature2017Recap)"
               no-author>
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
        <youtube :src="$store.getters.getPost(routes.creature2017Recap).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.gravelocity2017Video)"
               no-author>
      <div slot="media">
        <youtube :src="$store.getters.getPost(routes.gravelocity2017Video).ytSrc"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.relaunch)"
               no-author>
      <div slot="media">
        <image-link :post="$store.getters.getPost(routes.relaunch)"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.specMines29Oct17)"
               no-author>
      <div slot="media">
        <image-link :post="$store.getters.getPost(routes.specMines29Oct17)"/>
      </div>
    </post-card>

    <post-card :post="$store.getters.getPost(routes.creature2016)"
               no-author>
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
        <youtube :src="$store.getters.getPost(routes.creature2016).ytSrc"/>
      </div>
    </post-card>
  </div>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import Youtube from '../Iframes/Youtube'
  import ImageLink from '../Images/ImageLink'
  import RideWithGps from '../Iframes/RideWithGps'

  import * as routes from '../../scripts/routes'

  export default {
    name: 'page-2',
    components: {
      PostCard,
      Youtube,
      ImageLink,
      RideWithGps
    },
    data() {
      return {
        routes: routes
      }
    }
  }
</script>
