<template>
  <blog-post
    :header-height="800"
    :image="img + 'frozen-turner.jpg'"
    :post="post"
    :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        Cold? Yeah, you could say that. I mean, it IS winter after all, right? However, this is winter in
        Virginia...it’s not supposed to be THIS cold! This year’s First Ride of the New Year took the title of “coldest
        start so far.” Temperatures struggled to push 20 while 11 brave (or foolhardy) riders lined up and bundled up at
        the boat dock to start off their New Year right!
      </div>
      <div class="blog-p">
        Baselayer. Thermal jersey. Puffy jacket. Tights. Thermal tights. Wool socks. Winter riding boots. Boot covers.
        Balaclava. Liner gloves. Winter gloves. Pretty sure our gear weighed more than some of our bikes!
      </div>
      <blog-image portrait :src="img + 'corey-special-forces.jpg'"/>
      <div class="blog-p center caption">
        All bundled up and ready to roll!
      </div>
      <div class="blog-p">
        We lined up for the obligatory group picture, and once complete, our fearless leader bid us adieu and godspeed
        and we were off on our various adventures. A few of us took off down the fire road, aimed for the lower followed
        by a little climbing to keep us warm.
      </div>
      <div class="blog-p">
        Conditions were excellent...ground was frozen solid, as were the streams - no wet toes today! That’s not to say
        that the high speeds of the fire road and lower trails didn’t result in some FROZEN toes and fingers. I mean,
        you put those things right out front and center while you barrel down the fire road, and the wind chill just
        sucks away the heat!
      </div>
      <blog-image :src="img + 'corey-frozen-creek.jpg'"/>
      <div class="blog-p center caption">
        Definitely not splashing across that creek...well, unless the ice doesn’t hold!
      </div>
      <div class="blog-p">
        We hit the lowers (of course), starting with pedally runs down Schoolhouse, Little Bell, and Enchanted Forest.
        From here, a few us decided to head back and call it a day, while the more (fool)hardy of us took to the climbs
        and headed up the mountain.
      </div>
      <blog-image :src="img + 'corey-little-bell.jpg'"/>
      <blog-image :src="img + 'little-bell.jpg'"/>
      <div class="blog-p center caption">
        You got the proof we did this? Time to head back?
      </div>
      <div class="blog-p">
        The goal: climb Tuck to 4 Gorges Extended, head to the top of Brushy and drop Gauntlet to Lakeside. The reality:
        we got cold, diverted onto Upper Hemlock (ahem, Clownhead), and made our way back. Cole had never done Hemlock
        down (who goes UP Hemlock??), so he checked that off his bucket list, and I’d never actually had frostnip, so,
        yeah...well, that happened!
      </div>
      <blog-image :src="img + 'cole-clownhead.jpg'"/>
      <blog-image :src="img + 'andrew.jpg'"/>
      <blog-image portrait :src="img + 'corey-toes.jpg'"/>
      <div class="blog-p center">
        Here’s to a balmier 29th Annual First Ride of the New Year!
      </div>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from "../components/BlogPost"
  import BlogImage from "../components/Images/BlogImage"

  import {
    s3Pages,
    firstRide2018,
    creature2017Recap,
    middleMtMomma2018
  } from "../scripts/routes"
  import {headTags} from "../assets/functions"


  export default {
    name: 'first-ride-2018',
    components: {
      BlogPost,
      BlogImage
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          firstRide2018
        ]),
        relatedPosts: await context.store.dispatch('loadPosts', [
          creature2017Recap,
          middleMtMomma2018
        ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          "mountain, bike, blue, ridge, carvins, cove, carvins cove, new year, new years day, new, year, first ride, first, trail, enduro, cross country, xc, xxc, cold, winter, january",
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${firstRide2018}/`
      }
    }
  }
</script>
