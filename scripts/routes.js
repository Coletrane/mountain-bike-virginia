const results = 'results'
const gravelocity2018 = 'gravelocity-2018'
const middleMtMomma2018 = 'middle-mt-momma-2018'
const firstRide2018 = 'first-ride-2018'
const dodyRidgeRunFall2017 = 'dody-ridge-run-fall-2017'
const specMines29Oct17 = 'spec-mines-oct-29-2017'
const pivotSwitchbladeReview = 'pivot-switchblade-review'
const creature2017Recap = 'creature-2017-recap'
const relaunch = 'relaunch'
const creature2016 = 'creature-2016'

// Try and keep routes in order they are on the home page
// Keep non blog post routes at the top
const appRoutes = [
  results,
  gravelocity2018,
  middleMtMomma2018,
  firstRide2018,
  dodyRidgeRunFall2017,
  specMines29Oct17,
  pivotSwitchbladeReview,
  creature2017Recap,
  relaunch,
  creature2016
]

const routesWithNoIndex = [
  relaunch,
  creature2016,
  middleMtMomma2018
]

let routesWithIndex = []
appRoutes.forEach(route => {
  if (!routesWithNoIndex.includes(route)) {
    routesWithIndex.push(route)
  }
})

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

// Get image routes in sync with site routes
let imgRoutes = {}
appRoutes.forEach((route) => {
  imgRoutes[route] = ''
})

imgRoutes['/'] = 'foliage.png'
imgRoutes[appRoutesObj[results]] = 'podium.png'
imgRoutes[appRoutesObj[relaunch]] = 'rockymthi8.jpg'
imgRoutes[appRoutesObj[creature2017Recap]] = 'lumberjack.jpg'
imgRoutes[appRoutesObj[pivotSwitchbladeReview]] = 'IMG_3009.jpg'
imgRoutes[appRoutesObj[specMines29Oct17]] = 'IMG_2795.jpg'
imgRoutes[appRoutesObj[firstRide2018]] = 'classic-shot-2018.jpg'
imgRoutes[appRoutesObj[middleMtMomma2018]] = 'mmm.png'
imgRoutes[appRoutesObj[gravelocity2018]] = 'bigfinish.jpg'

const s3 = 'http://d2i660bt0ywr9a.cloudfront.net'
const s3StaticImg = s3 + '/static/img/'
const s3Pages = s3 + '/pages/'
const baseUrl = 'http://bikeva.com'

module.exports = {
  results,
  gravelocity2018,
  middleMtMomma2018,
  firstRide2018,
  dodyRidgeRunFall2017,
  specMines29Oct17,
  pivotSwitchbladeReview,
  creature2017Recap,
  relaunch,
  creature2016,
  appRoutes,
  appRoutesObj,
  imgRoutes,
  s3,
  s3StaticImg,
  s3Pages,
  baseUrl,
  routesWithIndex,
  routesWithNoIndex
}
