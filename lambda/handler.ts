import { Handler, Context, Callback } from "aws-lambda"
import { AWSError, DynamoDB, HttpResponse } from "aws-sdk"
import axios from "axios"
import * as moment from "moment"
import { CityWeather } from "./CityWeather"

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


enum WeatherIDs {
  ROANOKE = "4782241",
  HARRISONBURG = "4763231",
  RICHMOND = "4781756"
}
// declare keyword is for ambient types (outside libs with no .d.ts)
// but the compiler also does not generate code that uses declare
declare type WeatherID = keyof typeof WeatherIDs
const openWeatherUrl = (city: WeatherID) => {
  return `https://api.openweathermap.org/data/2.5/weather?id=${
    WeatherIDs[city]
  }&units=imperial&APPID=${process.env.WEATHER_PROD}`
}

const mtbvaWeather = "mtbva-weather"

export const getWeatherForCity: Handler = async (
  event: string,
  context: Context,
  callback: Callback
) => {
  const data = JSON.parse(event)
}

export const updateWeatherDB = async (
  event: string,
  context: Context,
  callback: Callback
) => {
  const ddb = new DynamoDB({ apiVersion: "2012-10-08" })

  // Check when weather was last updated
  const scanParams = {
    TableName: mtbvaWeather
  }

  ddb.scan(
    scanParams,
    async (err: AWSError, data: DynamoDB.Types.ScanOutput) => {
      if (err) {
        console.log(err)
      } else {
        if (data.Items) {
          for (const item of data.Items) {
            const weather = new CityWeather(
              item.city.S!,
              item.iconId.S!,
              moment(item.lastUpdated.S!),
              item.temperature.S!
            )

            const updatedDiff = moment(weather.lastUpdated.S)
              .utc()
              .diff(moment().utc(), "minutes")
            // Older than 30 mins
            if (updatedDiff > 30) {
              let res
              try {
                res = await axios.get(
                  openWeatherUrl(weather.city.S.toUpperCase() as WeatherID)
                )
              } catch (err) {
                console.log(err)
                callback(err)
              }

              if (res && res.data) {
                ddb.putItem(
                  {
                    TableName: mtbvaWeather,
                    Item: {
                      city: { S: item.city.S },
                      temperature: { N: res.data.main.temp.toString() },
                      iconId: { S: res.data.weather[0].icon },
                      lastUpdated: {
                        S: moment()
                          .utc()
                          .toISOString()
                      }
                    }
                  } as DynamoDB.Types.PutItemInput,
                  (err: AWSError, data: DynamoDB.Types.PutItemOutput) => {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log("Success", data)
                    }
                  }
                )
              }
            } else {
              const errStr = `Not updating: ${
                item.city.S
              } it is less than 30 minutes old`
              console.log(errStr)
              callback(errStr, {
                statusCode: 400,
                body: errStr
              } as HttpResponse)
            }
          }
        }
      }
    }
  )
}
