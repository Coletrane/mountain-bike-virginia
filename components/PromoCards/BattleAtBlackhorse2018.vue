<template>
  <post-card :post="$store.getters.getPost(battleAtBlackhorse2018)"
             no-author>
    <div slot="words">
      <div class="promo">
        23 miles, 3 stages, of absolute brutality from the Glenwood Horse trail, Hammin Hollow, and Dody Ridge
        trails. We'd like to give a Hell Yeah to all the shredders that finished this tough race.
        <nuxt-link :to="resultsBattleAtBlackhorse2018">
          Check out the results here.
        </nuxt-link>
      </div>
    </div>
    <div slot="media">
      <image-link :post="$store.getters.getPost(battleAtBlackhorse2018)"/>
    </div>
  </post-card>
</template>

<script>
  import PostCard from '../Card/PostCard'
  import ImageLink from '../Images/ImageLink'

  import {battleAtBlackhorse2018, resultsBattleAtBlackhorse2018} from '../../scripts/routes'

  export default {
    name: 'battle-at-blackhorse-2018-promo',
    components: {
      PostCard,
      ImageLink
    },
    data() {
      return {
        battleAtBlackhorse2018: battleAtBlackhorse2018,
        resultsBattleAtBlackhorse2018: resultsBattleAtBlackhorse2018
      }
    }
  }
</script>
