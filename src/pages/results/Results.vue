<template>
  <div id="results">
    <m-t-b-v-a-header
      :header-height="480"
      :image="image">
    </m-t-b-v-a-header>

    <v-content>
      <v-container>
          <v-card class="post">
            <v-select
              :items="races"
              item-text="race"
              v-model="currentRace"
              :placeholder="currentRace.race"
              label="Select"
              bottom
            ></v-select>

            <div v-for="clazz in currentRace.results.classes">
              <h5 class="center clazz">{{clazz.name}}</h5>
              <v-data-table
                :headers="headers"
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
        <!--</v-layout>-->
      </v-container>
    </v-content>

  </div>
</template>

<script>
  import MTBVAHeader from '../../components/MTBVAHeader.vue'
  import results from './results'

  import metas from '../../../metas'

  export default {
    name: 'results',
    components: {
      MTBVAHeader
    },
    metaInfo: metas['/results'],
    data() {
      return {
        image: this.s3 + '/pages/results/podium.png',
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
  @media screen and (min-width: 960px) {
    .container {
      max-width: 700px !important;
    }
  }

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
