<template>
  <div>
    <m-t-b-v-a-header
      :header-height="700"
      :image="image"
      title="Results">
    </m-t-b-v-a-header>
    <div class="main-content"
         :style="backgroundImage">
      <card>
        <div slot="content">
          <dropdown v-if="$store.state.results.currentRace.name"
                    :current-item="$store.state.results.currentRace.name"
                    :items="$store.state.results.races"/>
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

  import {
    s3Pages,
    s3StaticImg
  } from "../../scripts/routes"

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
        image: `${s3Pages}/results/podium.jpg`,
      }
    },
    computed: {
      backgroundImage() {
        return {
          backgroundImage:`url("${s3StaticImg}/asfalt-light.png")`
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
</style>
