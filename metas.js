const routes = require('./routes');

const baseUrl = "http://bikeva.com"

let metas = {}
routes.appRoutes.forEach((route, i, arr) => {
  metas[route] = {}
})

metas['/'] = {
  title: 'Mountain Bike Virginia',
  meta: [
    {charset: 'utf-8'},
    {description: 'Rides, Races, and Reviews. XXC VA race series. Just 40 more miles.'},
    {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails'},
    {property: 'og:url', content: baseUrl + routes['/']},
    {property: 'og:type', content: 'website'},
    {property: 'og:title', content: metas['/'].title},
    {property: 'og:image', content: routes.imgRoutes['/']}
  ]
}

metas['/results'] = {
  title: 'Results',
  meta: [
    {description: 'Results from races sanctioned by The Virginia Championship Commission'},
    {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, '}
  ]
}

metas['/relaunch'] = {}

metas['/creature2017recap'] = {
  title: "Creature from Carvin's Cove 2017",
  meta: [
    {description: "Results and pictures from the second annual race in Roanoke's fine Carvin's Cove"},
    {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove'}
  ]
}

metas['/pivot-switchblade-review'] = {
  title: "Review: Pivot Switchblade",
  meta: [
    {description: "Review of the 27.5 plus and 29 Pivot Switchblade in a beautiful blue"},
    {keywords: 'mountain, bike, pivot, carbon, pivot bikes, review, switchblade, 29, 27 plus, 29er, enduro, all mountain, trail'}
  ]
};

module.exports = metas;


