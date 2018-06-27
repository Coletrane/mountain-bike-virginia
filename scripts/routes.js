let s3
if (process.env.NODE_ENV === "production") {
  s3 = "https://d2i660bt0ywr9a.cloudfront.net"
} else {
  // Bad naming
  s3 = "http://localhost:3000/mtbva-s3-bucket"
}
const s3StaticImg = s3 + "/static/img"
const s3Favicons = s3 + "/static/favicons"
const s3Sponsors = s3 + "/static/sponsors"
const s3Results = s3 + "/results"
const s3Authors = s3 + "/authors"
const s3Posts = s3 + "/posts"
const s3WeatherIcons = s3 + "/static/weather-icons"
const s3Pages = s3 + "/pages"
const s3PagesEvents = s3Pages + "/events"
const s3Banners = s3 + "/banners"
const s3Routes = s3 + "/routes"
const baseUrl = "https://bikeva.com"

module.exports = {
  s3,
  s3StaticImg,
  s3Favicons,
  s3Sponsors,
  s3Results,
  s3Authors,
  s3Posts,
  s3WeatherIcons,
  s3Pages,
  s3PagesEvents,
  s3Banners,
  s3Routes,
  baseUrl
}
