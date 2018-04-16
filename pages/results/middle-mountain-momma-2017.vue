<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results/Results'

  import {results} from "../../assets/head-tags"
  import {headTags} from "../../assets/functions"

  export default {
    name: 'results-index',
    components: {
      Results
    },
    async asyncData(context) {
      await context.store.dispatch(
        'selectRace',
        'middle-mountain-momma-2017'
      )
    },
    head() {
      return headTags(
        results.title,
        results.description,
        results.keywords,
        {
          route: 'results-middle-mountain-momma-2017'
        }
      )
    }
  }
</script>
