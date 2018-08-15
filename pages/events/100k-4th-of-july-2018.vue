<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        Fourth of July has felt like a holiday week this year. It fell on a wednesday, bisecting the week into a laid
        back chill-fest, well, except on the actual 4th. The 100k on the 4th ride out of Ballast Point Brewing was a
        startup event that snowballed into something that attracted riders from all backgrounds and skill levels.
      </p>
      <blog-image :src="img + 'P1020051.jpg'"/>
      <p class="caption">
        Me and my father's Canyon Enduraces loaded up in visible humidity.
      </p>
      <blog-image :src="img + 'P1020045.jpg'"/>
      <p>
        The idea of spending 100k of my precious time on a road bike on 'Merica day when mountain biking was invented by
        <strong>'Merica</strong> had me skeptical. Luckily, this was a perfect chance to really stretch the legs of my
        Canyon Endurace. As the name implies the bike is made for long distance and long days in the saddle. With tiny,
        flexy seatstays and 32c Bontrager AW2 tires, tubeless, with 60 psi in them, it rides like a cloud. This bike is
        made for mountain bikers coming off of their full suspensions.
      </p>
      <blog-image :src="img + 'P1000144.jpg'"/>
      <p class="caption">
        A wild Houston Skipper appeared!
      </p>
      <blog-image :src="img + 'P1000146.jpg'"/>
      <p class="caption">
        Steve Ambruzs is poised to kill in his Pit Viper shades
      </p>
      <blog-image :src="img + 'P1000148.jpg'"/>
      <blog-image :src="img + 'P1020060.jpg'"/>
      <blog-image :src="img + 'P1020061.jpg'"/>
      <p>
        Speaking of full suspensions, your eyes do not deceive you folks. Rob Issem has shown up, not on a 22lb XC
        crusher, but his carbon YT Jeffsey! This was Rob's last ride on the bike until he ships it off to Bend, Oregon
        for the High Cascades 100. Talk about training! Rob is killing it racing this year, as he also plans to do the
        Shenandoah Mountain 100 and our very own
        <nuxt-link :to="{name: 'xxc-va-race-series-2018'}">Creature from Carvins Cove.</nuxt-link>
        Kudos! (not Strava)
      </p>
      <blog-image :src="img + 'P1020070.jpg'"/>
      <blog-image :src="img + 'P1020065.jpg'"/>
      <blog-image :src="img + 'P1020071.jpg'"/>
      <p>
        Easily the hardest part of the ride comes at Price Mountain. At 10 miles in, one is adequately warmed up and
        ready for the climb, but that makes it no less grueling. 10% grade for an entire mile up this mother. The payoff
        is more than worth it though. It is a mile down with hairpin turns and almost no cars.
      </p>
      <blog-image :src="img + 'P1020073.jpg'"/>
      <blog-image :src="img + 'P1020080.jpg'"/>
      <blog-image :src="img + 'P1020078.jpg'"/>
      <p>
        The unique thing about this ride, and a lot of riding in Botetourt County, is that road and mountain bike routes
        often intersect. Seeing trails like this one along the road didn't help curb my craving for full squish and only
        one chainring, but at this point I was committed to riding my Velo.
      </p>
      <blog-image :src="img + 'P1020085.jpg'"/>
      <blog-image :src="img + 'P1020092.jpg'"/>
      <p class="caption">
        Kelsey Harrington from <a href="https://www.downshiftbikes.com/">Downshift Bikes</a> crests Price Mountain.
      </p>
      <blog-image :src="img + 'P1020094.jpg'"/>
      <p class="caption">
        Mike Matysek on his Salsa Cutthroat. With as hot as it was, I would have loaded that thing up on all 6 water
        bottle mounting spots!
      </p>
      <blog-image :src="img + 'P1020098.jpg'"/>
      <blog-image :src="img + 'P1020104.jpg'"/>
      <blog-image :src="img + 'P1020120.jpg'"/>
      <p>
        Another mountain biking route that this route crosses is the Hoop Hole trail system. Hoop Hole is in the shape
        of an 8, has some really gnarly stuff, and some really sweet descents.
        <nuxt-link :to="{name: 'hoop-hole-trail-work-2018'}">Check out my blog post on clearing it out before the
          Rockstar VA 270.
        </nuxt-link>
      </p>
      <p>
        <a
          href="https://www.strava.com/location/roanoke%20va%20/type/cycling/min/0/max/5/center/37.6823,-79.9271/zoom/13">Strava
          Segments out on Hoop Hole.</a>
      </p>
      <blog-image :src="img + 'P1020114.jpg'"/>
      <blog-image :src="img + 'P1020122.jpg'"/>
      <blog-image :src="img + 'P1020116.jpg'"/>
      <blog-image :src="img + 'P1020128.jpg'"/>
      <p>
        The legendary Cull, Ken Taylor came out to ride on the fourth. As we were chatting to people at Hoop Hole
        someone said "oh Ken Taylor, I've seen your name at the top of some segments!" Ken is a great all around cyclist
        and an even better friend.
      </p>
      <quote>
        <span slot="quote">
          Not everyone's cut from our cloth.
        </span>
      </quote>
      <blog-image :src="img + 'P1020134.jpg'"/>
      <blog-image :src="img + 'P1020136.jpg'"/>
      <blog-image :src="img + 'P1020141.jpg'"/>
      <p>
        About 30 miles in, Karen Williams went down and kissed the pavement. Luckily we were right there to help out.
        She sprayed some water on her wounds and soldiered on to complete the entire ride! Great job Karen.
      </p>
      <blog-image :src="img + 'P1020146.jpg'"/>
      <blog-image :src="img + 'P1020151.jpg'"/>
      <p>
        Towards the final third of the ride, me and Ken joined up with Chris and his son, Bradley Bayne. We formed our
        own Niner RLT9 club, as Chris was on a nice real Steel one, Bradley on an aluminum one with a beautiful paint
        scheme. I sold my Niner RLT to Ken a while back, rounding out the group of owners and former owners of a great
        gravel bike. Chris and Bradley live in the Botetourt area and were able to provide us with a good route back and
        even have us kiss some gravel.
      </p>
      <blog-image :src="img + 'P1020160.jpg'"/>
      <p class="caption">
        The first and only store came at mile 40 and 4,000ft of climbing.
      </p>
      <blog-image :src="img + 'P1020163.jpg'"/>
      <p class="caption">
        Well, it is America Day after all. Ye Yee, motherfuckers.
      </p>
      <blog-image :src="img + 'P1020167.jpg'"/>
      <blog-image :src="img + 'P1000154.jpg'"/>
      <blog-image :src="img + 'P1000159.jpg'"/>
      <blog-image :src="img + 'P1000161.jpg'"/>
      <p class="caption">
        Ballast Point, on point.
      </p>
      <blog-image :src="img + 'P1000169.jpg'"/>
      <blog-image :src="img + 'P1020169.jpg'"/>
      <p class="caption">
        The Freedom Day 100k. Hubba Hubba.
      </p>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"
import Quote from "../../components/Card/Quote"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "events-100k-4th-of-july-2018",
  components: {
    BlogImage,
    BlogPost,
    Quote
  },
  mixins: [blogPost]
}
</script>
