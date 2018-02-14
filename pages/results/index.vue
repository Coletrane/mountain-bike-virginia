<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results'
  import {results} from "../../assets/head-tags"
  import {headTags} from "../../assets/functions"
  import * as routes from '../../scripts/routes'

  export default {
    name: 'results-index',
    components: {
      Results
    },
    head() {
      return headTags(
        results.title,
        results.description,
        results.keywords,
        {
          route: routes.results
        }
      )
    }
  }
</script>
