<template>
  <results/>
</template>
<script>
import Results from "../../components/Results/Results"

import results from "../../mixins/results"

export default {
  name: "battle-at-blackhorse-2018",
  components: {
    Results
  },
  mixins: [results],
  async asyncData(context) {
    await context.store.dispatch("selectRace", "battle-at-blackhorse-2018")
  }
}
</script>
