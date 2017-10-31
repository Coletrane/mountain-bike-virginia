const appRoutes = [
  '/',
  '/results',
  '/relaunch',
  '/creature2017recap',
  '/pivot-switchblade-review'
];

// Get image routes in sync with site routes
let imgRoutes
appRoutes.forEach((route, i, arr) => {
  imgRoutes[route] = ''
});

imgRoutes['/'] = 'foliage.png';

module.exports = {
  appRoutes,
  imgRoutes
};
