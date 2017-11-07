const s3 = require('../../routes').s3Root

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


module.exports = [
  {
    title: "Virginia's Blue Ridge Creature from Carvins Cove",
    subtitle: "Oct 2nd, 2016",
    promoParagraph: [
      {
        words: "The innagural year of Virginia's Blue Ridge Creature from Carvins Cove was a smashing success. We were even graced by the presence of the fantastic Mr. "
      },
      {
        words: "Jeremiah Bishop",
        url: "https://en.wikipedia.org/wiki/Jeremiah_Bishop"

      },
      {
        words: "who still managed to take first despite starting 3 minutes late."
      }
    ],
    altUrl: "/results",
    altText: "View the Results.",
    resultsIdx: 1,
    youtubeSrc: "https://www.youtube.com/embed/i5Lxb4wtuCs",
    href: "/creature2016",
    author: kyle
  },
  {
    title: "Full Site Relaunch!",
    subtitle: "The same pirates are still at it.",
    img: s3 + '/pages/relaunch/rockymthi8.jpg',
    href: "/relaunch",
    author: cole
  },
  {
    title: "Virginia's Blue Ridge Creature from Carvins Cove",
    subtitle: "Oct 1st, 2017",
    promoParagraph: [
      {
        words: "Once again Virginia's Blue Ridge Creature from Carvins Cove was a resounding success. Special thanks to Debbie Inman, Renee Powers, Chris Lee, and all the wonderful staff who helped make the Creature come alive.",
      }
    ],
    altUrl: "/results",
    altText: "View the Results.",
    resultsIdx: 0,
    youtubeSrc: "https://www.youtube.com/embed/uO44Tt0woT8",
    href: "/creature2017recap",
    author: kyle
  },
  {
    title: "Review: Pivot Switchblade",
    subtitle: "In a world obsessed with what discipline you ride, this bike doesn't have time for that.",
    promoParagraph: [
      {
        words: "With over a 5 grand pricetag, the Pivot Switchblade is easily a great deal. It's not enduro, it's not trail. Perhaps they should have called it the Swiss Army. No, that would never fly."
      }
    ],
    img: s3 + '/pages/pivot-switchblade-review/IMG_3009.jpg',
    href: "/pivot-switchblade-review",
    author: cole
  },
  {
    title: "Blue Ridge Parkway tuckaway into Spec Mines",
    subtitle: "Wind, Rain, Cold. Pick Two.",
    img: s3 + '/pages/spec-mines-oct-29-2017/IMG_3089.jpg',
    href: "/spec-mines-oct-29-2017",
    author: cole
  }
]
