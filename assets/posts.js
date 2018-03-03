import * as routes from '../scripts/routes'
import moment from 'moment'

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

export const schemaTypes = {
  article: 'NewsArticle',
  video: 'VideoObject',
  event: 'Event',
  review: 'Review',
  blog: 'Blog',
  person: 'Person',
  org: 'Organization',
  image: 'ImageObject',
  place: 'Place',
  address: 'PostalAddress',
  product: 'Product',
  rating: 'Rating'
}

export const posts = {}

posts.battleAtBlackhorse2018 = {
  title: 'Battle at Blackhorse 2018',
  subtitle: 'Enduro up the Glenwood Horse Trail, culminating on the famed Dody Ridge',
  img: `${routes.s3Pages}${routes.battleAtBlackhorse2018}/${routes.imgRoutes[routes.battleAtBlackhorse2018]}`,
  author: gavin,
  route: routes.battleAtBlackhorse2018,
  date: moment('2018-02-25'),
  loc: 'Day Creek, Blue Ridge, VA',
  description: 'Enduro race on the Glenwood Horse Trail up to the Blue Ridge Parkway and finishing with Dody Ridge',
  schema: {
    type: schemaTypes.article,
    mainEntityOfPage: {
      type: schemaTypes.blog
    }
  }
}

posts.battleAtBlackhorse2018Video = {
  title: 'Video: Battle at Blackhorse 2018',
  subtitle: 'The Classic Dody Ridge Drop',
  ytSrc: 'https://www.youtube.com/embed/SyFtJCHQNtc',
  author: cole,
  date: moment('2018-02-25'),
  loc: 'Day Creek, Blue Ridge, VA',
  route: routes.battleAtBlackhorse2018Video,
  schema: {
    type: schemaTypes.video
  }
}

posts.tuesdayNightLightsVideoFeb2018 = {
  title: 'Video: Tuesday Night Lights',
  subtitle: 'Weekly Winter ride from Deschutes Brewery up Mill Mountain',
  ytSrc: 'https://www.youtube.com/embed/tE3jWeQAEfY',
  author: kyle,
  date: 'February 23rd, 2018',
  loc: 'Mill Mountain, Roanoke, VA',
  route: routes.tuesdayNightLightsVideoFeb2018
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
  },
  schema: {
    type: schemaTypes.event,
    startDate: moment('2018-05-06T9:00'),
    location: {
      name: 'Douthat State Park Discovery Center',
      address: {
        streetAddress: '14239 Douthat State Park Rd',
        addressLocality: 'Millboro',
        postalCode: '24460',
        addressRegion: 'VA',
        addressCountry: 'US'
      }
    }
  }
}

posts.gravelocity2018 = {
  title: 'Gravelocity 2018',
  subtitle: 'From Gravel Dr. to the top of the Blue Ridge Parkway',
  img: `${routes.s3Pages}${routes.gravelocity2018}/bigfinish.jpg`,
  route: routes.gravelocity2018,
  author: cole,
  date: 'January 20th 2018',
  loc: 'Gravel Dr, Troutville, VA',
  description: 'Third annual gravel ride from Botetourt, across Lee Highway and up to the top of the Blue Ridge Parkway'
}

posts.firstRide2018 = {
  title: "28th Annual First Ride O' The New Year",
  subtitle: 'The coldest year on record.',
  img: `${routes.s3Pages}first-ride-2018/classic-shot-2018.jpg`,
  route: routes.firstRide2018,
  author: corey,
  description: '28th Annual First Ride Of The New Year at Carvins Cove in Roanoke, Virginia'
}

posts.dodyRidgeRunFall2017 = {
  title: 'Video: Dody Ridge Run, Fall 2017',
  subtitle: "Don't call her Doddie.",
  ytSrc: 'https://www.youtube.com/embed/5cIs1e8Sos4',
  route: routes.dodyRidgeRunFall2017,
  author: cole,
  description: 'Ride Down Dody ridge along the Blue Ridge Parkway, mile 98, near the Great Valley Overlook'
}

posts.specMines29Oct17 = {
  title: 'Blue Ridge Parkway tuckaway into Spec Mines',
  subtitle: 'Wind, Rain, Cold. Pick Two.',
  img: `${routes.s3Pages}spec-mines-oct-29-2017/IMG_3089.jpg`,
  route: routes.specMines29Oct17,
  author: cole,
  description: 'Ride on the Blue Ridge Parkway to Spec Mines trail in 30mph winds and sleet'
}

posts.pivotSwitchbladeReview = {
  title: 'Review: Pivot Switchblade',
  subtitle: "In a world obsessed with what discipline you ride, this bike doesn't have time for that.",
  img: `${routes.s3Pages}pivot-switchblade-review/IMG_3009.jpg`,
  route: routes.pivotSwitchbladeReview,
  author: cole,
  description: 'Review of the 27.5 plus and 29 Pivot Switchblade in a beautiful blue',
  schema: {
    type: schemaTypes.review,
    itemReviewed: {
      brand: 'Pivot Cycles',
      model: 'Switchblade'
    },
    reviewRating: {
      ratingValue: '4.5',
      bestRating: '5',
      worstRating: '1'
    }
  }
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
