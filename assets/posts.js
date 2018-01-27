import {s3StaticImg, s3Pages} from "../routes"
import * as routes from "../routes"

const cole = {
  name: "Cole Inman",
  imgUrl: `${s3StaticImg}cole.jpg`,
  fbUrl: "https://www.facebook.com/uhmcole"
}

const kyle = {
  name: "Kyle Inman",
  imgUrl: `${s3StaticImg}kyle.jpg`,
  fbUrl: "https://www.facebook.com/kylnman"
}

const corey = {
  name: "Corey Heitz",
  imgUrl: `${s3StaticImg}corey.jpg`,
  fbUrl: "https://www.facebook.com/corey.heitz"
}

export const posts = {}

posts.middleMtMomma2018 = {
  title: "Counties of Bath and Alleghany Middle Mountain Momma",
  subtitle: "May 6, 2018",
  img: `${s3Pages}${routes.middleMtMomma2018}/mmm.gif`,
  route: "/",
  author: cole,
  rwGps: "https://rwgps-embeds.com/embeds?type=route&id=26778887&sampleGraph=true",
  fbEvent: "https://www.facebook.com/events/371981453213164/",
  extraImgs: {
    logo: `${s3Pages}${routes.middleMtMomma2018}/mmm.gif`,
    start: `${s3Pages}${routes.middleMtMomma2018}/mmm-start.gif`
  }
}

posts.firstRide2018 = {
  title: "28th Annual First Ride O' The New Year",
  subtitle: "The coldest year on record.",
  img: `${s3Pages}first-ride-2018/classic-shot-2018.jpg`,
  route: routes.firstRide2018,
  author: corey
}

posts.dodyRidgeRunFall2017 = {
  title: "Video: Dody Ridge Run, Fall 2017",
  subtitle: "Don't call her Doddie.",
  ytSrc: "https://www.youtube.com/embed/5cIs1e8Sos4",
  route: routes.dodyRidgeRunFall2017,
  author: cole
}

posts.specMines29Oct17 = {
  title: "Blue Ridge Parkway tuckaway into Spec Mines",
  subtitle: "Wind, Rain, Cold. Pick Two.",
  img: `${s3Pages}spec-mines-oct-29-2017/IMG_3089.jpg`,
  route: routes.specMines29Oct17,
  author: cole
}

posts.pivotSwitchbladeReview = {
  title: "Review: Pivot Switchblade",
  subtitle: "In a world obsessed with what discipline you ride, this bike doesn't have time for that.",
  img: `${s3Pages}pivot-switchblade-review/IMG_3009.jpg`,
  route: routes.pivotSwitchbladeReview,
  author: cole
}

posts.creature2017Recap = {
  title: "Virginia's Blue Ridge Creature from Carvins Cove",
  subtitle: "Oct 1st, 2017",
  altText: "View the Results.",
  ytSrc: "https://www.youtube.com/embed/uO44Tt0woT8",
  route: routes.creature2017Recap,
  author: kyle
}

posts.relaunch = {
  title: "Full Site Relaunch!",
  subtitle: "The same pirates are still at it.",
  img: `${s3Pages}relaunch/rockymthi8.jpg`,
  route: "/",
  author: cole
}

posts.creature2016 = {
  title: "Virginia's Blue Ridge Creature from Carvins Cove",
  subtitle: "Oct 2nd, 2016",
  altText: "View the Results.",
  ytSrc: "https://www.youtube.com/embed/i5Lxb4wtuCs",
  route: "/",
  author: kyle
}
