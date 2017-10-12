<head>
  <!-- made by www.metatags.org -->
  <meta name="description" content="Results and pictures from the second annual 44mile XXC race. " />
  <meta name="keywords" content="mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove" />
  <meta name="author" content="metatags generator">
  <meta name="robots" content="index, follow">
  <meta name="revisit-after" content="3 month">
  <title>Creature from Carvin's Cove 2017</title>
  <!-- creature, carvins, cove -->
</head>

<template>
  <div id="creature-2017">
    <blog-post
      v-bind:header-height="headerHeight"
      v-bind:image="image"
      v-bind:post="post"
      v-bind:content="content">
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../BlogPost.vue'
  import posts from '../posts'
  import Lumberjack from './img/lumberjack.jpg'

  import Fence from './img/fence.jpg'
  import WoodsCreature from './img/woods-creature.jpg'
  import ParkinglotPub from './img/parkinglotpub.jpg'
  import Uptosomethin from './img/uptosomethin.jpg'
  import Gather from './img/gather.jpg'
  import Future from './img/future.jpg'
  import Singlespeeds from './img/singlespeeds.jpg'
  import Opens from './img/opens.jpg'
  import Womens from './img/womens.jpg'
  import Masters from './img/masters.jpg'
  import Veterans from './img/veterans.jpg'
  import Laura from './img/laura.jpg'
  import XXCVAChamps from './img/xxcva-champs.jpg'
  import Feelingit from './img/feelingit.jpg'
  import ScottieChamp from './img/scottie-champ.jpg'
  import WakeChamp from './img/wake-champ.jpg'
  import TruckYeah from './img/truckyeah.jpg'
  import OneOff from './img/oneoff.jpg'
  import WoodsSign from './img/woods-sign.jpg'

  const post = posts[2]

  export default {
    name: 'creature2017',
    components: {
      BlogPost
    },
    data() {
      return {
        headerHeight: 480,
        image: Lumberjack,
        post: post,
        content: [
          {
            p: [
              {
                words: "The view of Carvins Cove’s backside from Hollins University. Outdoor Trails, a terrific outdoor store in Daleville and Lynchburg, sponsored the free Saturday camping along with Hollins."
              }
            ],
            img: Fence
          },
          {
            p: [
              {
                words: "The Woods Family are staunch supporters of all types of cycling in the Roanoke region. Virginia’s Blue Ridge Creature From Carvins Cove is fortunate to be able to use the Woods Family Heating and AC parking lot for post-race awards, and the Parkway Brewing Parking Lot Pub, with Get Bent IPA on hand to benefit Roanoke’s highly active IMBA chapter."
              }
            ],
            img: WoodsCreature
          },
          {
            p: [
              {
                words: "The Parkway Parking Lot Pub is ready to serve thirsty 43 mile racers!"
              }
            ],
            img: ParkinglotPub
          },
          {
            p: [
              {
                words: "Amazing ride by #1 son Cole, his longest on any bike. 44 miles registered where it matters…Strava!"
              }
            ],
            img: Uptosomethin
          },
          {
            p: [
              {
                words: "Awesome weather for mountain bikers to gather."
              }
            ],
            img: Gather
          },
          {
            p: [
              {
                words: " Future Creatures!"
              }
            ],
            img: Future
          },
          {
            p: [
              {
                words: "Harrisonburg’s Scottie Pendleton, singlespeed winner, was taller than our photographer could handle. But he won the singlespeed regardless, on his first ever ride at Carvins Cove. Tommy Oravetz, runner up."
              }
            ],
            img: Singlespeeds
          },
          {
            p: [
              {
                words: "Open class winner Roanoke’s Andrew Dunlap, center, had the ride of his year. Robbie Bruce 2nd (right) and Jeff Glenn."
              }
            ],
            img: Opens
          },
          {
            p: [
              {
                words: "Women’s full podium. Roanoke’s 17 year old sensation Anna Sortore victorious (center) in likely her first ever 40+ mile ride. Susannah Cadawalder 2nd (right), Becku Barkett 3rd."
              }
            ],
            img: Womens
          },
          {
            p: [
              {
                words: "Masters aged 45-54. First, Acie Hylton (center),  Roanoker Wake Fulp 2nd, Chris Pohowsky from Blacksburg 3rd."
              }
            ],
            img: Masters
          },
          {
            p: [
              {
                words: "The man with the most amazing variety of  Strava ride locales, nationwide mountain biking trucker David Lachniet locked up the new Master 55+ competition. "
              }
            ],
            img: Veterans
          },
          {
            p: [
              {
                words: "Laura Hamm is amazing, and she rides with only one gear. Check her time in results to see just how so. First ever singlespeed woman in the XXC-VA Series. "
              }
            ],
            img: Laura
          },
          {
            p: [
              {
                words: "Adam Stephens of Fayetteville, WV, wins the XXC-VA open title and Champion’s jersey, flanked by runner up Andrew Dunlap. Adam raced all 5 series events that took place in 2 different Virginias, and throughout the Blue Ridge and Shenandoah Valley."
              }
            ],
            img: XXCVAChamps
          },
          {
            p: [
              {
                words: "Adam Stephens feeling it!"
              }
            ],
            img: Feelingit
          },
          {
            p: [
              {
                words: "Scottie Pendleton modeling the champion’s jersey of the singlespeed XXC-VA Series!"
              }
            ],
            img: ScottieChamp
          },
          {
            p: [
              {
                words: "Wake Fulp repeats! The first 2-time XXC-VA Champion, Master 45+. Wake faced much tougher competition this year and came out a better rider as a result."
              }
            ],
            img: WakeChamp
          },
          {
            p: [
              {
                words: "Long haul mountain biker David Lachniet’s new custom bike shop on wheels."
              }
            ],
            img: TruckYeah
          },
          {
            p: [
              {
                words: "One-off bike rack system."
              }
            ],
            img: OneOff
          },
          {
            p: [
              {
                words: "Many thanks to Woods Family HVAC. We’ll see you again next year!"
              }
            ],
            img: WoodsSign
          },
          {
            youtubeSrc: post.youtubeSrc
          }
        ]
      }
    }
  }
</script>
