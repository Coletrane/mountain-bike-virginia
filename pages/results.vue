<template>
  <div>
    <m-t-b-v-a-header
      :header-height="700"
      :image="image">
    </m-t-b-v-a-header>
    <div class="main-content main-content-mobile">
      <card>
        <div slot="content">
          <dropdown :current-item="currentRace.race"
                    :items="races"
                    :select-race="selectRace"/>
          <div v-for="clazz in currentRace.results.classes">
            <h4>{{clazz.name}}</h4>
            <class-table :items="clazz.riders"/>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import MTBVAHeader from "../components/MTBVAHeader"
  import Card from "../components/Card"
  import Dropdown from "../components/Dropdown"
  import ClassTable from "../components/ClassTable"

  import {s3Pages, results} from "../routes"
  import {resultsData} from "../assets/results"
  import {headTags} from "../assets/functions"
  import {bootstrapScripts} from "../assets/scripts"
  const podium = `${s3Pages}${results}/podium.png`

  export default {
    name: "results",
    components: {
      MTBVAHeader,
      Card,
      Dropdown,
      ClassTable
    },
    head() {
      return {
        ...headTags(
          "Race Results",
          "Results from races sanctioned by The Virginia Championship Commission",
          "mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, ",
          {
            imgSrc: podium
          }
        )
      }
    },
    data() {
      return {
        image: podium,
        races: this.initRaces().reverse(),
        currentRace: this.initRaces().reverse()[0],
        headers: [
          {
            text: "Position",
            align: "center",
            sortable: false,
            value: "position"
          },
          {
            text: "Name",
            align: "center",
            sortable: false,
            value: "name"
          },
          {
            text: "Time",
            align: "center",
            sortable: false,
            value: "time"
          }
        ]
      }
    },
    methods: {
      initRaces() {
        // Deep copy
        let resultsWithPos = JSON.parse(JSON.stringify(resultsData))
        resultsWithPos.forEach(race => {
          race.results.classes.forEach(clazz => {
            clazz.riders.forEach((rider, i, arr) => {
              rider.position = i + 1
              rider.value = false
            })
          })
        })

        return resultsWithPos
      },
      divide(classes) {
        let result = []
        let size = 2
        for (let i = 0; i < classes.length; i += size) {
          result.push(classes.slice(i, i + size))
        }

        return result
      },
      selectRace: function (race) {
        this.currentRace = race
      }
    }
  }
</script>
<style scoped>
  /*Livin on the edge*/
  .main-content {
    text-align: center;
  }
</style>
