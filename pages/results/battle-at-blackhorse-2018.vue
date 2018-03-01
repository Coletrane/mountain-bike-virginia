<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results/Results'
  import {results} from "../../assets/head-tags"
  import {headTags} from "../../assets/functions"
  import * as routes from '../../scripts/routes'

  export default {
    name: 'battle-at-blackhorse-2018',
    components: {
      Results
    },
    head() {
      return headTags(
        results.title,
        results.description,
        results.keywords,
        {
          route: routes.resultsBattleAtBlackhorse2018,
        }
      )
    },
    created() {
      this.$store.commit('selectRace', 'Battle at Blackhorse 2018')
    }
  }
</script>

<style scoped>

</style>