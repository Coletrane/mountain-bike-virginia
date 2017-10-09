<template>
  <div id="results">
    <m-t-b-v-a-header
      v-bind:header-height="480"
      v-bind:image="image">
    </m-t-b-v-a-header>

    <div v-for="race in races">
      <h4>{{race.race}}</h4>

      <div v-for="clazz in race.results.classes">
        <h6>{{clazz.name}}</h6>
        <v-data-table
          v-bind:headers="headers"
          v-bind:items="clazz.riders"
          hide-actions>
        </v-data-table>
      </div>
    </div>

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
    data() {
      return {
        image: Podium,
        races: this.initClasses(),
        headers: [
          {
            text: 'Position',
            align: 'center',
            sortable: true,
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
            sortable: true,
            value: 'time'
          }
        ]
      }
    },
    methods: {
      initClasses() {
        // Deep copy
        let resultsWithPos = JSON.parse(JSON.stringify(results.results))
        resultsWithPos.forEach(race => {
          race.results.classes.forEach(clazz => {
            clazz.riders.forEach((rider, i, arr) => {
              rider.position = i + 1
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

</style>
