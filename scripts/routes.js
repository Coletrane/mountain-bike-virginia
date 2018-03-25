const results = 'results'
const resultsMiddleMountainMomma2017 = 'results/middle-mountain-momma-2017'
const resultsBattleAtBlackhorse2018 = 'results/battle-at-blackhorse-2018'

const caneCreekViscosetReview = 'cane-creek-viscoset-review'
const dtSwiss54tRatchetReview = 'dt-swiss-54t-ratchet-review'
const ravenwoodRide = 'ravenwood-ride'
const battleAtBlackhorse2018 = 'battle-at-blackhorse-2018'
const battleAtBlackhorse2018Video = 'battle-at-blackhorse-2018-video'
const tuesdayNightLightsVideoFeb2018 = 'tuesday-night-lights-video-feb-2018'
const rockstarVa2018 = 'rockstar-va-2018'
const middleMtMomma2018 = 'middle-mt-momma-2018'
const gravelocity2018 = 'gravelocity-2018'
const firstRide2018 = 'first-ride-2018'
const dodyRidgeRunFall2017 = 'dody-ridge-run-fall-2017'
const specMines29Oct17 = 'spec-mines-oct-29-2017'
const pivotSwitchbladeReview = 'pivot-switchblade-review'
const gravelocity2017Video = 'gravelocity-2017-video'
const creature2017Recap = 'creature-2017-recap'
const relaunch = 'relaunch'
const creature2016 = 'creature-2016'

// Try and keep routes in order they are on the home page
// Keep non blog post routes at the top
const appRoutes = [
  results,
  resultsMiddleMountainMomma2017,
  dtSwiss54tRatchetReview,
  caneCreekViscosetReview,
  ravenwoodRide,
  resultsBattleAtBlackhorse2018,
  battleAtBlackhorse2018,
  battleAtBlackhorse2018Video,
  tuesdayNightLightsVideoFeb2018,
  rockstarVa2018,
  middleMtMomma2018,
  gravelocity2018,
  firstRide2018,
  dodyRidgeRunFall2017,
  specMines29Oct17,
  pivotSwitchbladeReview,
  gravelocity2017Video,
  creature2017Recap
]

// For use in express and below
let appRoutesObj = {}
appRoutes.forEach(route => {
  appRoutesObj[route] = route
})

// Add the "/" to each route
appRoutes.forEach((route, i, arr) => {
  arr[i] = '/' + route
})

// Add the home route ("/") in
appRoutes.unshift('/')

let imgRoutes = {}
imgRoutes['/'] = 'foliage.jpg'
imgRoutes[appRoutesObj[results]] = 'podium.png'
imgRoutes[appRoutesObj[resultsMiddleMountainMomma2017]] = 'podium.png'
imgRoutes[appRoutesObj[resultsBattleAtBlackhorse2018]] = 'P1010128.jpg'
imgRoutes[appRoutesObj[ravenwoodRide]] = 'canyon-ravenwood.jpg'
imgRoutes[appRoutesObj[battleAtBlackhorse2018]] = 'P1010128.jpg'
imgRoutes[appRoutesObj[battleAtBlackhorse2018Video]] = 'P1000160.jpg'
imgRoutes[appRoutesObj[tuesdayNightLightsVideoFeb2018]] = 'tnl.jpg'
imgRoutes[relaunch] = 'rockymthi8.jpg'
imgRoutes[appRoutesObj[creature2017Recap]] = 'lumberjack.jpg'
imgRoutes[appRoutesObj[pivotSwitchbladeReview]] = 'IMG_3009.jpg'
imgRoutes[appRoutesObj[specMines29Oct17]] = 'IMG_3089.jpg'
imgRoutes[appRoutesObj[dodyRidgeRunFall2017]] = 'iron-mine.jpg'
imgRoutes[appRoutesObj[creature2017Recap]] = 'wake-champ.jpg'
imgRoutes[appRoutesObj[firstRide2018]] = 'classic-shot-2018.jpg'
imgRoutes[appRoutesObj[middleMtMomma2018]] = 'mmm.png'
imgRoutes[appRoutesObj[gravelocity2018]] = 'bigfinish.jpg'
imgRoutes[appRoutesObj[rockstarVa2018]] = 'rockstar.jpg'
imgRoutes[appRoutesObj[gravelocity2017Video]] = 'bobletts-climb.jpg'
imgRoutes[appRoutesObj[dtSwiss54tRatchetReview]] = 'dt-swiss-54t-ratchet.jpg'
imgRoutes[appRoutesObj[caneCreekViscosetReview]] = ''

let s3
if (process.env.NODE_ENV === 'production') {
  s3 = 'https://d2i660bt0ywr9a.cloudfront.net'
} else {
  // Bad naming
  s3 = 'http://localhost:3000/mtbva-s3-bucket'
}
const s3StaticImg = s3 + '/static/img'
const s3Favicons = s3 + '/static/favicons'
const s3Sponsors = s3 + '/static/sponsors'
const s3Results = s3 + '/results'
const s3Authors = s3 + '/authors'
const s3Posts = s3 + '/posts'
const s3WeatherIcons = s3 + '/static/weather-icons'
const s3Pages = s3 + '/pages'
const baseUrl = 'https://bikeva.com'

module.exports = {
  results,
  resultsMiddleMountainMomma2017,
  resultsBattleAtBlackhorse2018,
  caneCreekViscosetReview,
  dtSwiss54tRatchetReview,
  ravenwoodRide,
  battleAtBlackhorse2018,
  battleAtBlackhorse2018Video,
  tuesdayNightLightsVideoFeb2018,
  rockstarVa2018,
  gravelocity2018,
  middleMtMomma2018,
  firstRide2018,
  dodyRidgeRunFall2017,
  specMines29Oct17,
  pivotSwitchbladeReview,
  gravelocity2017Video,
  creature2017Recap,
  relaunch,
  creature2016,
  appRoutes,
  appRoutesObj,
  imgRoutes,
  s3,
  s3StaticImg,
  s3Favicons,
  s3Sponsors,
  s3Results,
  s3Authors,
  s3Posts,
  s3WeatherIcons,
  s3Pages,
  baseUrl
}
