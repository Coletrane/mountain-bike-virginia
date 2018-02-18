<template>
  <div class="weather-container">
    <div class="weather">
      <div class="city-name">{{cityName}}</div>
      <div class="temp-icon">
        <span class="temperature">{{tempStr}}</span>
        <img v-if="imgLoaded"
             :src="icon"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {weatherIds, weatherIcons} from '../../assets/weather'
  import {s3WeatherIcons} from '../../scripts/routes'

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
        imgLoaded: false,
        tempStr: "",
        temperature: null
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
          console.log(res.data)
          this.temperature = res.data.main.temp
          this.description = res.data.weather[0].description
          this.iconId = res.data.weather[0].icon
          this.imgLoaded = true
          console.log(this.temperature, this.description, this.iconId)
        }
      }
    },
    computed: {
      cityName() {
        const city = this.city.charAt(0).toUpperCase() + this.city.slice(1)
        return `${city}, VA`
      },
      icon() {
        if (this.iconId) {
          const iconLocation = weatherIcons.find(icon => icon.ow === this.iconId)
          console.log(iconLocation, this.iconId)
          return `${s3WeatherIcons}/${iconLocation.icon}.svg`
        }
      }
    },
    watch: {
      temperature() {
        this.tempStr = parseInt(this.temperature) + '°'
      }
    }
  }
</script>

<style scoped>

  .weather {
    text-align: center;
  }

  span, div {
    color: white;
  }

  .city-name {
    font-size: 1rem;
    padding-top: 1rem;
  }

  .temp-icon {
    margin-top: -1rem;
  }
  
  .temperature {
    font-size: 2.5rem;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    margin-bottom: 1.6rem;
  }

</style>