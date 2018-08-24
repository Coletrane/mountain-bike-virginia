import { Moment } from "moment"

export class CityWeather {
  readonly city: { S: string }
  readonly iconId: { S: string }
  readonly lastUpdated: { S: string }
  readonly temperature: { S: string }
  constructor(
    city: string,
    iconId: string,
    lastUpdated: Moment,
    temperature: string
  ) {
    this.city = { S: city }
    this.iconId = { S: iconId }
    this.lastUpdated = { S: lastUpdated.toISOString() }
    this.temperature = { S: temperature }
  }
}
