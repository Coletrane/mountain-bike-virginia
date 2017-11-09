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
  ]
}

metas['/results'] = {
  title: 'Results',
  meta: [
    {description: 'Results from races sanctioned by The Virginia Championship Commission'},
    {keywords: 'mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, '},
  ]
}

metas['/relaunch'] = {
  title: "Mountain Bike Virginia Site Relaunch",
  meta: [
    {description: "Relaunch"}
  ]
}

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

metas['/spec-mines-oct-29-2017'] = {
  title: "Two Different Climates, Separated by 1000 Vertical Feet",
  meta: [
    {description: "Ride on the Blue Ridge Parkway to Spec Mines trail in 30mph winds and sleet"},
    {keywords: 'mountain, bike, blue, ridge, parkway, spec, mines, pico, pulaski, iron, company, ride, adventure, cold, fall, daleville, botetourt'}
  ]
}

// // Properties for crawlers
// for (let key in metas) {
//   if (metas.hasOwnProperty(key)) {
//     metas[key].meta.push({property: 'og:type', content: 'website'})
//     metas[key].meta.push({property: 'og:url', content: baseUrl + routes.appRoutesObj[key]})
//     metas[key].meta.push({property: 'og:image', content: baseUrl + routes.imgRoutes[key]})
//     metas[key].meta.push({property: 'og:title', content: metas[key].title})
//     metas[key].meta.push({property: 'fb:app_id', content: '1426359417419881'})
//     metas[key].meta.forEach(meta => {
//       if (meta.description) {
//         metas[key].meta.push({property: 'og:description', content: meta.description})
//
//       }
//     })
//   }
// }

module.exports = metas;
