const fs = require('fs')
const glob = require('glob')
const _ = require('lodash')

// let imgRoutes = {}

// imgRoutes['/'] = 'foliage.jpg'
//
// imgRoutes[appRoutesObj[results]] = 'podium.jpg'
// imgRoutes[appRoutesObj[resultsMiddleMountainMomma2017]] = 'podium.jpg'
// imgRoutes[appRoutesObj[resultsBattleAtBlackhorse2018]] = 'P1010128.jpg'
//
// imgRoutes[appRoutesObj[middleMtMomma2018]] = 'mmm.png'
// imgRoutes[appRoutesObj[rockstarVa2018]] = 'stokesville-market-snow.jpg'
// imgRoutes[appRoutesObj[hoopHoleTrailWork2018]] = 'cole-sly-lookback.jpg'
// imgRoutes[appRoutesObj[caneCreekViscosetReview]] = 'viscoset.jpg'
// imgRoutes[appRoutesObj[dtSwiss54tRatchetReview]] = 'dt-swiss-54t-ratchet.jpg'
// imgRoutes[appRoutesObj[battleAtBlackhorse2018]] = 'P1010128.jpg'
// imgRoutes[appRoutesObj[battleAtBlackhorse2018Video]] = 'P1000160.jpg'
// imgRoutes[appRoutesObj[ravenwoodRide]] = 'canyon-ravenwood.jpg'
// imgRoutes[appRoutesObj[tuesdayNightLightsVideoFeb2018]] = 'tnl.jpg'
// imgRoutes[appRoutesObj[gravelocity2018]] = 'bigfinish.jpg'
// imgRoutes[appRoutesObj[firstRide2018]] = 'classic-shot-2018.jpg'
// imgRoutes[appRoutesObj[dodyRidgeRunFall2017]] = 'iron-mine.jpg'
// imgRoutes[appRoutesObj[specMines29Oct17]] = 'IMG_3089.jpg'
// imgRoutes[appRoutesObj[gravelocity2017Video]] = 'bobletts-climb.jpg'
// imgRoutes[appRoutesObj[creature2017Recap]] = 'wake-champ.jpg'
// imgRoutes[appRoutesObj[pivotSwitchbladeReview]] = 'IMG_3009.jpg'
// imgRoutes[relaunch] = 'rockymthi8.jpg'

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
const s3Ads = s3 + '/ads'
const baseUrl = 'https://bikeva.com'

// Get all the routes that Nuxt will generate
let routes = []
let files = glob.sync('pages/**/*.{vue,js}')
files.forEach(file => {
  let route = file.replace(/\.(js|vue)$/, '')
  route = route.replace('pages/', '')
  route = route.replace('index', '')
  if (route === '') {
    route = '/'
  }
  routes.push(route)
})

// Make sure .json files have a corresponding .vue file in /pages
let posts = []
const postJsonFiles = glob.sync('json/posts/**/*.json')
postJsonFiles.forEach(file => {
  let jsonFile = fs.readFileSync(file, 'utf8')

  let fileNameRoute = file.split('/')
  fileNameRoute = fileNameRoute[fileNameRoute.length - 1]
  fileNameRoute = fileNameRoute.replace('.json', '')

  let route = routes.find(route => route === fileNameRoute)

  const post = JSON.parse(jsonFile)
  if (!post.date) {
    throw new Error('NO DATE! ' + fileNameRoute)
  }

  post.route = route || fileNameRoute

  posts.push(post)
})

// Sort the posts by date
posts.sort((a, b) => {
  return new Date(b.date) - new Date(a.date)
})

// Reinsert posts that we want out of order
posts.splice(1, 0, posts.find(post => post.route === 'rockstar-va-2018'))

// Make sure there are no duplicates
posts = _.uniq(posts)

// Get just the routes in order
let postsOrder = []
posts.forEach(post => {
  postsOrder.push(post.route)
})

// Initialize the pagination (sortof)
const postsPerPage = [
  10
]
postsPerPage.push(
  postsOrder.length - postsPerPage
                      .reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                      })
)

// "Initialize" multi dimensional array
const pages = []
postsPerPage.forEach((perPage, page, arr) => {
  pages[page] = []
})
let postsOrderCount = 0
pages.forEach((page, pageNumber, pagesArr) => {
  for (let i = 0; i < postsPerPage[pageNumber]; i++) {
    pages[pageNumber][i] = postsOrder[postsOrderCount]
    postsOrderCount++
  }
})

console.log(pages)
pages.forEach((page, i, arr) => {
  const json = JSON.stringify(page, null, 2)
  fs.writeFileSync(`json/pages/${i}.json`, json)
})

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
  s3Ads,
  baseUrl
}

