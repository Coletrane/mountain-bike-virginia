// This is ES5 MFs
const pirates = require('./relaunch/img/rockymthi8.jpg');

module.exports = [
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
  },
  {
    title: "Full Site Relaunch!",
    subtitle: "The same pirates are still at it.",
    img: pirates,
    href: "/relaunch"
  },
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
  },
].reverse()
