<template>
  <results header-image="connor-bell-dab.jpg"/>
</template>

<script>
import Results from "../../components/Results/Results"

import results from "../../assets/mixins/results"

export default {
  name: "results-middle-mountain-momma-2018",
  components: {
    Results
  },
  mixins: [results],
  async asyncData(context) {
    await context.store.dispatch("selectRace", "middle-mountain-momma-2018")
  }
}
</script>
