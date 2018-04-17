<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results/Results'

  import {results} from "../../assets/head-tags"
  import {headTags} from "../../assets/functions"

  export default {
    name: 'battle-at-blackhorse-2018',
    components: {
      Results
    },
    async asyncData(context) {
      await context.store.dispatch(
        'selectRace',
        'battle-at-blackhorse-2018'
      )
    },
    head() {
      return headTags(
        results.title,
        results.description,
        results.keywords,
        {
          route: 'results/battle-at-blackhorse-2018',
        }
      )
    }
  }
</script>
