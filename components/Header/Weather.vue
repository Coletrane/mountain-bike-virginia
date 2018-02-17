<template>
  <h3>{{cityName}}</h3>
  <img v-if="imgLoaded"
       :src="'http://openweathermap.org/img/w/' + icon + '.png'"/>
</template>

<script>
  import {weatherIds} from "../../assets/weather"

  export default {
    name: "weather",
    props: {
      city: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        imgLoaded: false
      }
    },
    created() {
      this.getWeather()
    },
    methods: {
      async getWeather() {
        let apiKey = process.env.testWeather
        if (process.env.NODE_ENV === 'production') {
          apiKey = process.env.prodWeather
        }

        if (weatherIds[this.city]) {
          const res = await this.$axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${weatherIds[this.city]}&units=imperial&APPID=${apiKey}`)
          this.temperature = res.data.main.temp
          this.description = res.data.weather.description
          this.icon = res.data.weather.icon
          this.imgLoaded = true
          console.log(this.temperature, this.description, this.icon)
        }
      }
    },
    computed: {
      cityName() {
        const city = this.city.charAt(0).toUpperCase() + this.city.slice(1)
        return `${city}, VA`
      }
    }
  }
</script>

<style scoped>

</style>