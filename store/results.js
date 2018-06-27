import { s3Results } from "../scripts/routes"
import axios from "axios"

const raceNames = [
  "Middle Mountain Momma 2018",
  "Battle At Blackhorse 2018",
  "Creature From Carvins Cove 2017",
  // 'Middle Mountain Momma 2017',
  "Creature From Carvins Cove 2016"
  // 'Middle Mountain Momma 2016'
]

let races = []
raceNames.forEach(race => {
  races.push({
    name: race,
    route: race
      .split(" ")
      .join("-")
      .toLowerCase()
  })
})

export default {
  state: {
    loadedRaces: [],
    races: races,
    currentRace: {}
  },

  actions: {
    selectRace: async (context, route) => {
      let resultRace = {}

      if (!context.state.loadedRaces.find(race => race === route)) {
        let res = await axios.get(`${s3Results}/${route}.json`)

        if (res.data) {
          resultRace = res.data
          resultRace.route = route
          context.commit("RACE_LOADED", resultRace)
          context.commit("SET_CURRENT_RACE", resultRace)
        }
      }

      return resultRace
    }
  },

  mutations: {
    RACE_LOADED: (state, race) => {
      let raceExists = Object.keys(state.races).find(raceKey => {
        return state.races[raceKey].route === race.route
      })
      if (raceExists) {
        state.loadedRaces.push(race)
      }
    },
    SET_CURRENT_RACE: (state, race) => {
      let curRace = state.loadedRaces.find(curRace => {
        return curRace.route === race.route
      })
      if (curRace) {
        state.currentRace = race
      }
    }
  }
}
