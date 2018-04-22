<template>
  <blog-post :image="img + 'rocky-instinct-mill-mt-underdog-bikes.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        No need to talk much about components on any 2018 bike since SRAM is on a share rampage due to cut rate OEM pricing. Slash margins for market share and still doesn’t work like Shimano. So SRAM it is, although I felt no difference nor advantage of the 12 speed GX over 11 speed other “S” (except for the plasticky feel). Shifted fine, wheels rolled, brakes slowed me somewhat less confidently, FOX drop post worked well enough (not 9point8 well, confirmed). Tires were awesome, thank you Maxxis. Weight for the XL was sub 30 in carbon, although learned the alloy version weighs but 6 ounces more than the $3199 aluminum, also sub 30. Hey, it’s your thousand bucks.
      </div>
      <blog-image :src="img + 'rocky-instinct-woodthrush-mill-mt.jpg'"/>
      <div class="blog-p">
        The bike, too, was a blast. The big question going in was whether this lowslack “trail” 140 machine was a hog climbing. Easily spent 8 out of every 10 minutes of this test going up, so got a pretty good notion of it’s limitations over 1100 vertical gained. All limitations were denied, however, as the Instinct, with it’s steep seat tube which can be adjusted even steeper, went up as well as anything I’ve owned. With very little experience on current chopped fork angled bikes, I feared the Minion up front would wander aimlessly in a drunken state all over the trail. Only slight extra attention was required at first, and shortly, wandering fronts were forgotten entirely. Seems the low part of the equation really keeps the front end down particularly on super steeps, inspiring vertical grind motion stability with a great cockpit position. No lockout used, none needed.
      </div>
      <blog-image :src="img + 'kyle-inman-climbing-woodthrush.jpg'"/>
      <div class="blog-p">
        Not so big a question was the Instincts of traveling in a primarily downward direction. The stability of rake was a gas for this grizzled veteran’s first real go at such. Once draining a bunch of air from the Fox 34, I finally found the ride I ordered. Fun, for sure, and tuned nicely for a first outing. For big fellows, fatter stanchions’ stiffness is an immediate benefit. 29 wheels are truth in these Blue Ridge Mountains, so buck fads and marketing schemes and get some.
      </div>
      <blog-image :src="img + 'kyle-inman-down-monument-2.jpg'"/>
      <blog-image :src="img + 'kyle-inman-down-monument.jpg'"/>
      <div class="blog-p">
        As the proud and rare owner of a 1993 Rocky Speed Unified Rear Triangle full Fox Vanilla Coil suspended bicycle, I must say the ride manners have upgraded significantly. Nice one, Rocky Mountain, thanks for the ride!
      </div>
      <blog-image :src="img + 'rocky-mountain-speed.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../components/BlogPost.vue'
  import BlogImage from '../components/Images/BlogImage'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'rocky-mountain-instinct-review',
    components: {
      BlogPost,
      BlogImage
    },
    mixins: [
      blogPost
    ]
  }
</script>
