<template>
  <div id="results">
    <m-t-b-v-a-header
      v-bind:header-height="480"
      v-bind:image="image">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-card class="post">
            <v-select
              v-bind:items="races"
              item-text="race"
              v-model="currentRace"
              v-bind:placeholder="currentRace.race"
              label="Select"
              bottom
            ></v-select>

            <div v-for="clazz in currentRace.results.classes">
              <h5 class="center clazz">{{clazz.name}}</h5>
              <v-data-table
                v-bind:headers="headers"
                :items="clazz.riders"
                hide-actions>

                <template slot="items" scope="props">
                  <td class="center">{{props.item.position}}</td>
                  <td class="center">{{props.item.name}}</td>
                  <td class="center">{{props.item.time}}</td>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import MTBVAHeader from '../../components/MTBVAHeader.vue'
  import Podium from './img/podium.png'
  import results from './results'

  export default {
    name: 'results',
    components: {
      MTBVAHeader
    },
    metaInfo: {
      title: 'Results',
      meta: [
        {description: 'Results from races sanctioned by The Virginia Championship Commission'},
        {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, '},
        {}
      ]
    },
    data() {
      return {
        image: Podium,
        races: this.initRaces().reverse(),
        currentRace:  this.initRaces().reverse()[0],
        headers: [
          {
            text: 'Position',
            align: 'center',
            sortable: false,
            value: 'position'
          },
          {
            text: 'Name',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Time',
            align: 'center',
            sortable: false,
            value: 'time'
          }
        ]
      }
    },
    methods: {
      initRaces() {
        // Deep copy
        let resultsWithPos = JSON.parse(JSON.stringify(results))
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
        let result = [];
        let size = 2;
        for (let i = 0; i < classes.length; i += size) {
          result.push(classes.slice(i, i + size));
        }

        return result;
      }
    }
  }

</script>

<style>
  .clazz {
    margin-bottom: 0 !important;
    margin-top: 1rem;
    padding-left: 6%;
  }

  .post {
    margin: auto;
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .center {
    text-align: center;
  }
  .results-container {
    padding: 1rem;
    background-color: white;
  }
</style>
