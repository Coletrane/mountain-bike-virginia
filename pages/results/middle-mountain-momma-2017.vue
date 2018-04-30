<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results/Results'

  import results from '../../assets/mixins/results'

  export default {
    name: 'results-index',
    components: {
      Results
    },
    mixins: [
      results
    ],
    async asyncData(context) {
      await context.store.dispatch(
        'selectRace',
        'middle-mountain-momma-2017'
      )
    }
  }
</script>
