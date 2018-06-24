const fs = require('fs')
const glob = require('glob')
const _ = require('lodash')
const arrayMove = require('array-move')

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

  let fileNameRoute = file.replace('json/posts/', '')
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
const silverIdx = _.findIndex(posts, post => post.route === 'events/roanoke-silver-ride-center')
if (silverIdx === -1) {
  throw new Error('')
}
posts = arrayMove(posts, silverIdx, 2)

const mmmIdx = _.findIndex(posts, post => post.route === 'middle-mt-momma-2018')
const mmmVideoIdx = _.findIndex(posts, post => post.route === 'videos/middle-mountain-momma-2018-video')
if (mmmIdx === -1 || mmmVideoIdx === -1) {
  throw new Error('')
}
posts = arrayMove(posts, mmmIdx, mmmVideoIdx)

const ravenIdx = _.findIndex(posts, post => post.route === 'ravenwood-ride')
if (ravenIdx === -1) {
  throw new Error('')
}
posts = arrayMove(posts, ravenIdx, ravenIdx + 3)

// Make sure there are no duplicates
if (_.uniq(posts).length !== posts.length) {
  throw new Error('_.uniq(posts.length) !== posts.length')
}
posts = _.uniq(posts)

// Get just the routes in order
let postsOrder = []
posts.forEach(post => {
  postsOrder.push(post.route)
})

// Initialize the pagination (sortof)
const postsPerPage = [
  10,
  10
]
postsPerPage.push(
  postsOrder.length - postsPerPage.reduce((accumulator, currentValue) => {
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

console.log('Routes Builder: Writing JSON files')
console.log(pages)
pages.forEach((page, i, arr) => {
  const json = JSON.stringify(page, null, 2)
  fs.writeFileSync(`json/routes/${i}.json`, json)
})

module.exports = {
  routes,
  posts
}