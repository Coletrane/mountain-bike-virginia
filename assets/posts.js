import * as routes from '../scripts/routes'

const cole = {
  name: 'Cole Inman',
  imgUrl: `${routes.s3StaticImg}cole.jpg`,
  fbUrl: 'https://www.facebook.com/uhmcole',
  stravaUrl: 'https://www.strava.com/athletes/15356904'
}

const kyle = {
  name: 'Kyle Inman',
  imgUrl: `${routes.s3StaticImg}kyle.jpg`,
  fbUrl: 'https://www.facebook.com/kylnman',
  stravaUrl: 'https://www.strava.com/athletes/3880?oq=kyle'
}

const corey = {
  name: 'Corey Heitz',
  imgUrl: `${routes.s3StaticImg}corey.jpg`,
  fbUrl: 'https://www.facebook.com/corey.heitz',
  stravaUrl: 'https://www.strava.com/athletes/5342373'
}

const gavin = {
  name: 'Gavin Kline',
  imgUrl: `${routes.s3StaticImg}gavin.jpg`,
  fbUrl: 'https://www.facebook.com/gavin.kline.9',
  stravaUrl: 'https://www.strava.com/athletes/594725'
}

export const posts = {}

posts.battleAtBlackhorse2018 = {
  title: 'Battle at Blackhorse 2018',
  subtitle: 'Enduro up the Glenwood Horse Trail, culminating on the famed Dody Ridge',
  img: `${routes.s3Pages}${routes.battleAtBlackhorse2018}/${routes.imgRoutes[routes.battleAtBlackhorse2018]}`,
  author: gavin,
  route: routes.battleAtBlackhorse2018,
  date: 'February 25th, 2018',
  loc: 'Day Creek, Blue Ridge, VA'
}

posts.battleAtBlackhorse2018Video = {
  title: 'Video: Battle at Blackhorse 2018',
  subtitle: 'The Classic Dody Ridge Drop',
  ytSrc: 'https://www.youtube.com/embed/SyFtJCHQNtc',
  author: cole,
  date: 'February 25th, 2018',
  loc: 'Day Creek, Blue Ridge, VA',
  route: routes.battleAtBlackhorse2018Video
}

posts.rockstarVa2018 = {
  title: 'RockStar VA 270',
  subtitle: 'April 7th 2018, 7 A.M. at Blacksheep Coffee Harrisonburg, VA. 270 miles from Rocktown(Harrisonburg, VA) to The Star City(Roanoke, VA)',
  img: `${routes.s3Pages}${routes.rockstarVa2018}/rockstar.jpg`,
  route: routes.rockstarVa2018,
  author: cole,
  fbEvent: 'https://www.facebook.com/events/1583483341702188/',
  rwGps: 'https://rwgps-embeds.com/embeds?type=route&id=26535965&sampleGraph=true'
}

posts.middleMtMomma2018 = {
  title: 'Counties of Bath and Alleghany Middle Mountain Momma',
  subtitle: 'Douthat State Park Discovery Center, May 6, 2018',
  img: `${routes.s3Pages}${routes.middleMtMomma2018}/mmm.png`,
  route: routes.middleMtMomma2018,
  author: kyle,
  rwGps: 'https://rwgps-embeds.com/embeds?type=route&id=26778887&sampleGraph=true',
  fbEvent: 'https://www.facebook.com/events/371981453213164/',
  extraImgs: {
    logo: `${routes.s3Pages}${routes.middleMtMomma2018}/mmm.png`,
    start: `${routes.s3Pages}${routes.middleMtMomma2018}/mmm-start.gif`
  }
}

posts.gravelocity2018 = {
  title: 'Gravelocity 2018',
  subtitle: 'From Gravel Dr. to the top of the Blue Ridge Parkway',
  img: `${routes.s3Pages}${routes.gravelocity2018}/bigfinish.jpg`,
  route: routes.gravelocity2018,
  author: cole,
  date: 'January 20th 2018',
  loc: 'Gravel Dr, Troutville, VA'
}

posts.firstRide2018 = {
  title: "28th Annual First Ride O' The New Year",
  subtitle: 'The coldest year on record.',
  img: `${routes.s3Pages}first-ride-2018/classic-shot-2018.jpg`,
  route: routes.firstRide2018,
  author: corey
}

posts.dodyRidgeRunFall2017 = {
  title: 'Video: Dody Ridge Run, Fall 2017',
  subtitle: "Don't call her Doddie.",
  ytSrc: 'https://www.youtube.com/embed/5cIs1e8Sos4',
  route: routes.dodyRidgeRunFall2017,
  author: cole
}

posts.specMines29Oct17 = {
  title: 'Blue Ridge Parkway tuckaway into Spec Mines',
  subtitle: 'Wind, Rain, Cold. Pick Two.',
  img: `${routes.s3Pages}spec-mines-oct-29-2017/IMG_3089.jpg`,
  route: routes.specMines29Oct17,
  author: cole
}

posts.pivotSwitchbladeReview = {
  title: 'Review: Pivot Switchblade',
  subtitle: "In a world obsessed with what discipline you ride, this bike doesn't have time for that.",
  img: `${routes.s3Pages}pivot-switchblade-review/IMG_3009.jpg`,
  route: routes.pivotSwitchbladeReview,
  author: cole
}

posts.creature2017Recap = {
  title: "Virginia's Blue Ridge Creature from Carvins Cove",
  subtitle: 'Oct 1st, 2017',
  altText: 'View the Results.',
  ytSrc: 'https://www.youtube.com/embed/uO44Tt0woT8',
  route: routes.creature2017Recap,
  author: kyle
}

posts.relaunch = {
  title: 'Full Site Relaunch!',
  subtitle: 'The same pirates are still at it.',
  img: `${routes.s3Pages}relaunch/rockymthi8.jpg`,
  route: ' ',
  author: cole
}

posts.creature2016 = {
  title: "Virginia's Blue Ridge Creature from Carvins Cove",
  subtitle: 'Oct 2nd, 2016',
  altText: 'View the Results.',
  ytSrc: 'https://www.youtube.com/embed/i5Lxb4wtuCs',
  route: ' ',
  author: kyle
}
