<template>
  <div>
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>
    <div class="main-content main-content-mobile">
      <card>
        <div slot="content">
          <dropdown v-if="$store.state.currentRaceName"
                    :current-item="$store.state.currentRaceName"
                    :items="races"/>
          <div v-if="$store.getters.currentRace">
            <div v-for="clazz in $store.getters.currentRace.results.classes">
            <h4>{{clazz.name}}</h4>
            <class-table :items="clazz.riders"/>
            </div>
          </div>
          <div v-else
               class="placeholder-card"></div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from "../Header/MTBVAHeader"
  import Card from "../Card/Card"
  import Dropdown from "./Dropdown"
  import ClassTable from "./ClassTable"
  import {s3Pages, results, s3Results} from "../../scripts/routes"
  import {races} from '../../assets/results'

  const podium = `${s3Pages}${results}/podium.png`

  export default {
    name: "results",
    components: {
      MTBVAHeader,
      Card,
      Dropdown,
      ClassTable
    },
    data() {
      return {
        image: podium,
        races: races
      }
    },
    created() {
      this.getRace()
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'selectRace' &&
            !this.raceIsLoaded(mutation.payload)) {
          this.getRace()
        }
      })

    },
    methods: {
      async getRace() {
        const res = await this.$axios.get(`${s3Results}${this.$store.getters.currentRacePath}.json`)
        this.$store.commit('raceLoaded', res.data)
        this.currentRace = res.data
      },
      raceIsLoaded(name) {
        return this.$store.state.loadedRaces.find(loaded => loaded.name === name)
      }
    }
  }
</script>
<style scoped>
  /*Livin on the edge*/
  .main-content {
    text-align: center;
  }

  .placeholder-card {
    height: 2000px;
  }
</style>
