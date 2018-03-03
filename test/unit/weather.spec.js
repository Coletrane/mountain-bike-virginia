import {weatherIcons} from '../../assets/weather'
import {s3WeatherIcons} from '../../scripts/routes'

const request = require('request-promise')
const expect = require('./global.spec').expect

describe('weather test', () => {
  describe('weather icons test', () => {
    for (const icon of weatherIcons) {
      it(`should be able to reach Open Weather's icon: ${icon.ow}.png`, async () => {
        let res = await request({
          uri: `https://openweathermap.org/img/w/${icon.ow}.png`,
          resolveWithFullResponse: true
        })

        expect(await res.statusCode)
          .to.equal(200)
      })

      it(`should be able to reach my icon: ${icon.icon}.svg`, async () => {
        let res = await request({
          uri: `${s3WeatherIcons}/${icon.icon}.svg`,
          resolveWithFullResponse: true
        })

        expect(await res.statusCode)
          .to.equal(200)
      })
    }
  })
})
