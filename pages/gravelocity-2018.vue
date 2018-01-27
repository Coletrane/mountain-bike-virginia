<template>
  <blog-post
    :header-height="800"
    :image="img + 'great-valley.jpg'"
    :post="post">
    <div slot="content">
      <div class="blog-p">
        Like Burning Man, or some other strange, yearly ritual, every mid January since 2015 a large group of the best
        riders in Virginia come together for one of the greatest gravel rides in the country. Forged in snow,
        Gravelocity has quickly become an astounding event thanks to Rob Issem and the <a
        href="https://www.facebook.com/virginiaenduranceseries/">Virginia Endurance Series</a>
      </div>
      <blog-image :src="img + 'issem.jpg'"/>
      <div class="blog-p">
        2018 had the best turnout of any previous ride, despite the average temperature of 20 degrees. No matter. We on
        the 54 mile ride would be doing roughly 5,900 feet of climbing, a perfect chance to warm up. Our launch point
        was none other than the great Wes Wilmer's house. Wilmer is a carbon Y-Bike riding, stud who eats centuries for
        breakfast, and we thank him for that. Oh and for letting us park at his house too.
      </div>
      <blog-image :src="img +_'parking.jpg'"/>
      <blog-image :src="img + 'wilmer-way.jpg'"/>
      <blog-image :src="img + 'wilmer.jpg'"/>

      <div class="blog-p">
        We set off past route 11, through Camp Bethel, and into what we call, the Botetourt Turnpike, which is a gravel
        road sandwiched between Troutville and the Blue Ridge parkway. The Turnpike connects Bobllett's gap, Blackhorse
        gap, and Salt Pond road, all 3 of which we would be touching.
      </div>
      <blog-image :src="img + 'noodle-bars.jpg'"/>
      <blog-image :src="img + 'choppy.jpg'"/>
      <div class="blog-p">
        As far north as we could go, we ascended up Boblett's gap, a 3 mile 1000ft cruiser. once at the top, some
        elected to go down the other side, a crime in my mind considering that both sides of Boblett's gap have
        fantastic rolling humps that provide plenty of hangtime. Not fancying cracking my chainstays by catching air on
        a road (adventure) bike, we elected to go further north up The Parkway and descend Goose Creek Valley. If one
        could be so bold as to call a section <i>Road Singletrack</i> Goose Creek Valley is it.
      </div>
      <blog-image :src="img + 'bobletts-bridge.jpg'"/>
      <div class="blog-p center caption">
        Corey Heitz smashing that climb on a pink candy paint Surly!
      </div>
      <blog-image :src="img + 'top-of-bobletts.jpg'"/>
      <blog-image :src="img + 'bobletts-climb.jpg'"/>
      <div class="blog-p center caption">
        On the climb up these two nice blokes from Staunton and Fredricksburg asked me where the mountain bike trails
        are in Roanoke. "Right here!" I said. All these gravel roads connect great trails like Spec Mines, Dody Ridge,
        Glenwood Horse Trail, and we even passed Mineshaft on the way up Bobletts. At the top I pointed right and said:
        "Oh by the way, thats the Appalacian Trail right there."
      </div>
      <blog-image :src="img + 'off-to-goosecreek.jpg'"/>
      <div class="blog-p">
        The big one. The finale. The brutal, world renowned, <strong>Blackhorse Gap.</strong> This climb holds a special
        place in my heart and my Strava (my only starred segment). 1,152 feet in 2.2 miles, and 30 minutes of pain. We
        love it, we hate it, at least we're on Craybon Noodle Bar Plasti-Bikes™ (or steel if you're a baller) instead of
        our mountain bikes.
      </div>
      <blog-image :src="img + 'black-gate.jpg'"/>
      <div class="blog-p center caption">
        "You will lead us to the Black Gate" - Frodo
      </div>
      <blog-image :src="img + 'pivot-cross-bike.jpg'"/>
      <blog-image :src="img + 'blackhorse-climb.jpg'"/>
      <blog-image :src="img + 'chad-top-of-blackhorse.jpg'"/>
      <div class="blog-p">
        At the top I met up with <a href="https://www.facebook.com/carlomcdy">Carlo Dy</a> and his gang of vandals from
        Roaonoke and Virginia Beach. We continued on to our target: Salt Pond Road.
      </div>
      <blog-image :src="img + 'great-valley.jpg'"/>
      <div class="blog-p center caption">
        Squad.
      </div>
      <div class="blog-p">
        Gravelocity ends by getting on Gravel Dr. and going through a farm to cut back to Wilmer's place. This is
        private label gravel with only permission to ride it one day a year.
      </div>

      <blog-image :src="img + 'farm-pano.jpg'"/>
      <blog-image :src="img + 'finish1.jpg'"/>
      <blog-image :src="img + 'blue-helmet.jpg'"/>

      <blog-image :src="img + 'beard.jpg'"/>
      <blog-image :src="img + 'bandit.jpg'"/>
      <blog-image :src="img + 'berry.jpg'"/>
      <blog-image :src="img + 'chris.jpg'"/>
      <blog-image :src="img + 'david-gregg.jpg'"/>
      <blog-image :src="img + 'deschutes-girl.jpg'"/>
      <blog-image :src="img + 'bobletts-gap-blokes.jpg'"/>

      <blog-image :src="img + 'deschutes-jersey.jpg'"/>
      <blog-image :src="img + 'red-jacket.jpg'"/>
      <blog-image :src="img + 'red-noodle-bars.jpg'"/>
      <blog-image :src="img + 'sick-salsa.jpg'"/>
      <blog-image :src="img + 'thebikelane.jpg'"/>
      <blog-image :src="img + 'carlo.jpg'"/>
      <blog-image :src="img + 'andreas.jpg'"/>
      <div class="blog-p center">
        Until next year gravel grinders.
      </div>
      <blog-image :src="img + 'wilmer-end.jpg'"/>


    </div>
  </blog-post>
</template>
<script>
  import BlogPost from "../components/BlogPost"
  import BlogImage from "../components/BlogImage"

  import {s3Pages} from "../routes"
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"

  const post = posts.gravelocity2018

  export default {
    name: post.route,
    components: {
      BlogPost,
      BlogImage
    },
    head() {
      return headTags(
        "Gravelocity 2018",
        "Third annual gravel ride from Botetourt, across Lee Highway and up to the top of the Blue Ridge Parkway",
        "gravel, ride, bike, road, blue ridge parkway, blue ridge, parkway, winter, group ride, gravelocity, beer, cross, cyclocross, adventure bike, cx, trail",
        post
      )
    },
    data() {
      return {
        img: `${s3Pages}${post.route}/`,
        post: post
      }
    }
  }
</script>
