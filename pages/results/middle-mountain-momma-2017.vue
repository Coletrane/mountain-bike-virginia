<template>
  <results/>
</template>

<script>
  import Results from '../../components/Results'
  import {findRaceIndex} from "../../assets/results";

  export default {
    name: 'results-index',
    components: {
      Results
    },
    created() {
      this.$store.commit('changeRace', findRaceIndex('Middle Mountain Momma 2017'))
    }
  }
</script>
