const s3 = require('../routes').s3Root

const cole = {
  name: 'Cole Inman',
  imgUrl: s3 + '/static/img/cole.jpg',
  fbUrl: 'https://www.facebook.com/uhmcole'
}

const kyle = {
  name: 'Kyle Inman',
  imgUrl: s3 + '/static/img/kyle.jpg',
  fbUrl: 'https://www.facebook.com/kylnman'
}

module.exports = {
  'dody-ridge-run-fall-2017': {
    title: "Video: Dody Ridge Run, Fall 2017",
    subtitle: "Don't call her Doddie.",
    ytSrc: 'https://www.youtube.com/embed/5cIs1e8Sos4',
    route: 'dody-ridge-run-fall-2017',
    author: cole
  },
  'spec-mines-oct-29-2017': {
    title: "Blue Ridge Parkway tuckaway into Spec Mines",
    subtitle: "Wind, Rain, Cold. Pick Two.",
    img: s3 + '/pages/spec-mines-oct-29-2017/IMG_3089.jpg',
    route: "spec-mines-oct-29-2017",
    author: cole
  },
  'pivot-switchblade-review': {
    title: "Review: Pivot Switchblade",
    subtitle: "In a world obsessed with what discipline you ride, this bike doesn't have time for that.",
    img: s3 + '/pages/pivot-switchblade-review/IMG_3009.jpg',
    route: "pivot-switchblade-review",
    author: cole
  },
  'creature-2017-recap': {
    title: "Virginia's Blue Ridge Creature from Carvins Cove",
    subtitle: "Oct 1st, 2017",
    altText: "View the Results.",
    ytSrc: "https://www.youtube.com/embed/uO44Tt0woT8",
    route: "creature-2017-recap",
    author: kyle
  },
  'relaunch': {
    title: "Full Site Relaunch!",
    subtitle: "The same pirates are still at it.",
    img: s3 + '/pages/relaunch/rockymthi8.jpg',
    route: "/",
    author: cole
  },
  'creature-2016': {
    title: "Virginia's Blue Ridge Creature from Carvins Cove",
    subtitle: "Oct 2nd, 2016",
    altText: "View the Results.",
    ytSrc: "https://www.youtube.com/embed/i5Lxb4wtuCs",
    route: "/",
    author: kyle
  },
}

