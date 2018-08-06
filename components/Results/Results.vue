<template>
  <div>
    <m-t-b-v-a-header :image="image"
                      title="Results">
    </m-t-b-v-a-header>
    <div class="main-content"
         :style="backgroundImage">
      <card>
        <div slot="content">
          <dropdown v-if="$store.state.results.currentRace.name"
                    :initial-item="$store.state.results.currentRace"
                    :items="$store.state.results.races"
                    :vuexAction="resultsActionTypes.selectRace"/>
          <div v-if="$store.state.results.currentRace">
            <div v-for="clazz in $store.state.results.currentRace.results.classes">
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

import { s3StaticImg, s3Pages } from "../../scripts/routes"
import { resultsActionTypes } from "../../store/results"

export default {
  name: "results",
  components: {
    MTBVAHeader,
    Card,
    Dropdown,
    ClassTable
  },
  props: {
    headerImage: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      resultsActionTypes: resultsActionTypes
    }
  },
  computed: {
    image() {
      if (this.headerImage) {
        return `${s3Pages}/results/${this.headerImage}`
      } else {
        return `${s3Pages}/results/podium.jpg`
      }
    },
    backgroundImage() {
      return {
        backgroundImage: `url("${s3StaticImg}/asfalt-light.png")`
      }
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

.select {
  margin: 1rem auto;
}

table {
  width: 100%;
}

</style>
