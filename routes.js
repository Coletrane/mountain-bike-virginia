const appRoutes = [
  '/',
  '/results',
  '/relaunch',
  '/creature2017recap',
  '/pivot-switchblade-review',
  // '/spec-mines-oct-29-2017'
]

// Get image routes in sync with site routes
let imgRoutes = {};
appRoutes.forEach((route, i, arr) => {
  imgRoutes[route] = ''
})

imgRoutes['/'] = './foliage.png'
imgRoutes['results'] = './podium.png'
imgRoutes['/relaunch'] = './rockymthi8.jpg'
imgRoutes['/creature2017recap'] = './lumberjack.jpg'
imgRoutes['/pivot-switchblade-review'] = './IMG_3009.jpg'
// imgRoutes['/spec-mines-oct-29-2017'] = './IMG_2795.jpg'


module.exports = {
  appRoutes,
  imgRoutes
}
