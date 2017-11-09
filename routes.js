const appRoutes = [
  '/',
  '/results',
  '/relaunch',
  '/creature-2017-recap',
  '/pivot-switchblade-review',
  '/spec-mines-oct-29-2017'
]

let appRoutesObj = {}
appRoutes.forEach(route => {
  appRoutesObj[route] = route
})

// Get image routes in sync with site routes
let imgRoutes = {};
appRoutes.forEach((route) => {
  imgRoutes[route] = ''
})

imgRoutes['/'] = '/foliage.png'
imgRoutes['/results'] = '/podium.png'
imgRoutes['/relaunch'] = '/rockymthi8.jpg'
imgRoutes['/creature-2017-recap'] = '/lumberjack.jpg'
imgRoutes['/pivot-switchblade-review'] = '/IMG_3009.jpg'
imgRoutes['/spec-mines-oct-29-2017'] = './IMG_2795.jpg'

const s3Root = 'https://s3.amazonaws.com/mtbva'

module.exports = {
  appRoutes,
  appRoutesObj,
  imgRoutes,
  s3Root
}
