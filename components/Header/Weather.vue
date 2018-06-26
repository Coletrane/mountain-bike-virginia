<template>
    <div v-if="allLoaded"
         class="weather">
      <div class="city-name">{{cityName}}</div>
      <div class="temp-icon">
        <span class="temperature">{{tempStr}}</span>
        <img v-if="imgLoaded"
             :src="icon"/>
      </div>
    </div>
</template>

<script>
import { weatherIds, weatherIcons } from "../../assets/weather"
import { s3WeatherIcons } from "../../scripts/routes"

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
      if (process.env.NODE_ENV === "production") {
        if (weatherIds[this.city]) {
          const res = await this.$axios.get(
            `https://api.openweathermap.org/data/2.5/weather?id=${
              weatherIds[this.city]
            }&units=imperial&APPID=${process.env.prodWeather}`
          )

          this.temperature = res.data.main.temp
          this.description = res.data.weather[0].description
          this.iconId = res.data.weather[0].icon
          this.imgLoaded = true
        }
      } else {
        // Test data
        this.temperature = "70.01"
        this.description = "sunny"
        this.iconId =
          weatherIcons[Math.floor(Math.random() * weatherIcons.length)].ow
        this.imgLoaded = true
      }
    }
  },
  computed: {
    cityName() {
      const city = this.city.charAt(0).toUpperCase() + this.city.slice(1)
      return city
    },
    icon() {
      if (this.iconId) {
        const iconLocation = weatherIcons.find(icon => icon.ow === this.iconId)
        return `${s3WeatherIcons}/${iconLocation.icon}.svg`
      }
    },
    allLoaded() {
      return this.imgLoaded && this.tempStr && this.temperature && this.iconId
    }
  },
  watch: {
    temperature() {
      this.tempStr = parseInt(this.temperature) + "°"
    }
  }
}
</script>

<style scoped>
.weather {
  text-align: center;
}

span,
div {
  color: white;
}

.city-name {
  font-size: 1rem;
}

.temp-icon {
  margin-top: -0.5rem;
}

.temperature {
  font-size: 2rem;
  vertical-align: middle;
}

img {
  width: 3.5rem;
  height: auto;
  vertical-align: middle;
}

@media (max-width: 450px) {
  .temperature {
    font-size: 1.5rem;
  }
  img {
    width: 2.5rem;
  }
}
</style>
