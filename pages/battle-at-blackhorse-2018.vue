<template>
  <div>
    <blog-post :header-height="600"
               :image="img + 'IMG_3576.jpg'"
               :post="post"
               :related-posts="relatedPosts">
      <div slot="content">
        <div class="blog-p">
          When someone says fun, you think of mountain bikes, friends, amazing gems of backcountry singletrack and a
          nice long day to enjoy it all. Now add in a few more friends and several extra rad peps to time a downhill or
          three for some friendly competition. That is a recipe for an absolutely astounding day in the woods. Blue
          Ridge Gravity has been hosting D Cups for quite a few years now to hone skills, make friends and have a good
          time. Starting out as a series of Super Ds every year, the events have evolved into full on, all day Enduros
          featuring some of the best possible tracks in the state if not the region. All for the low, low price of
          waking up early and getting after it.
        </div>
        <blog-image :src="img + 'P1000131.jpg'"/>
        <div class="blog-p">
          One would think the less than stellar forecast would scare off many, but the promise of trails that were next
          to immune to rain drew over forty eager shredders. The stoke was high in the parking lot as everyone loaded up
          packs and Rob Issem’s trusty Volvo 240, being used as a supply drop, with snacks, goggles, assorted enduro
          specific gear and a few choice beverages.
        </div>
        <blog-image :src="img + 'P1010116.jpg'"/>
        <blog-image :src="img + 'P1010120.jpg'"/>
        <div class="blog-p">
          Sundays event featured 23 miles and 4,600 feet of mixed singletrack, fire road, goat path, parkway and maybe a
          little good ol’ fashioned gnar. Riding out of Day Creek on the Glenwood Horse Trail traversing and slowly
          climbing the mountain side for about 4miles the riders reached the start of Stage 1. Dropping down from the
          side of Gel Ridge to Bobblets Gap Road the narrow off cambers, tight turns and wet leaves proved treacherous
          for many despite the lack of harsh gradient.
        </div>

        <div class="blog-p">
          Following a classic Virginia fire road climb up to the parkway the blistering speed and sheer joy of the
          little-known Hammond Hollow Trail lay in wait. A sneaky lung buster climb interrupted the mach stupid blast
          down the mountain that tested the bravado of those daring enough to stay off the brakes.
        </div>
        <blog-image :src="img + 'P1000160.jpg'"/>
        <blog-image :src="img + 'P1010111.jpg'"/>
        <blog-image :src="img + 'P1000215.jpg'"/>
        <div class="blog-p">
          The last stage was a classic long haul down Dody Ridge featuring the steepest chutes of the day, a significant
          drop (that was still sent by a carbon hardtail wielding savage!), loose rock gardens and a finishing straight
          in effectively a boulder filled creek bed. Times were almost double the previous stages on this more enduro
          than the most enduro branded EWS endorsed convertible lid on the market deciding the finial times of the day.
        </div>
        <blog-image :src="img + 'P1010149.jpg'"/>
        <blog-image :src="img + 'P1010109.jpg'"/>
        <blog-image :src="img + 'P1000195.jpg'"/>
        <blog-image :src="img + 'P1000164.jpg'"/>
        <div class="blog-p">
          Finishing out the highlight of everyone’s weekend was a gathering of dudes and dudettes in the parking lot
          while Kyle Imman cooked up dogs and Ken Lee and crew figured up some podiums.
        </div>
        <blog-image :src="img + 'P1000340.jpg'"/>
        <div class="blog-p">
          Lucas Weaver took home the W with a sizzling total time of 13:52 posting the fastest times on both stage 2 and
          3! Miach Fontz rode into a super solid second place despite being miles from his native boat county. Buffalo
          Man himself, Matt Clements did it for Dale at #3. Rob Hobson and Andrew Issem rounded out the top 5.
        </div>
        <blog-image :src="img + 'P1010117.jpg'"/>
        <blog-image :src="img + 'IMG_3588.jpg'"/>

        <div class="blog-p">
          Leila Husain absolutely crushed the win for the gals, besting most of the dudes as well. Emma Runquist and
          Leslie King took the remaining steps of the women’s podium.
        </div>
        <blog-image :src="img + 'P1000320.jpg'"/>
        <blog-image :src="img + 'P1000330.jpg'"/>
        <blog-image :src="img + 'P1000188.jpg'"/>
        <blog-image :src="img + 'P1000178.jpg'"/>
        <div class="blog-p center caption">
          Local legend Steve Hetherington shreds the Dody Ridge Shoot
        </div>
        <blog-image :src="img + 'P1000268.jpg'"/>
        <blog-image :src="img + 'P1010174.jpg'"/>
        <blog-image :src="img + 'P1010135.jpg'"/>
        <blog-image :src="img + 'P1010151.jpg'"/>
        <blog-image :src="img + 'P1010121.jpg'"/>
        <blog-image :src="img + 'P1010118.jpg'"/>
        <blog-image :src="img + 'P1000289.jpg'"/>
        <blog-image :src="img + 'P1000323.jpg'"/>
        <blog-image :src="img + 'P1010140.jpg'"/>
        <blog-image :src="img + 'P1000294.jpg'"/>
        <blog-image :src="img + 'P1000221.jpg'"/>
        <blog-image :src="img + 'P1000182.jpg'"/>
        <blog-image :src="img + 'P1010159.jpg'"/>
        <blog-image :src="img + 'P1010128.jpg'"/>
        <blog-image :src="img + 'P1000255.jpg'"/>
        <blog-image :src="img + 'P1010169.jpg'"/>
        <blog-image :src="img + 'P1010130.jpg'"/>
        <blog-image :src="img + 'P1000334.jpg'"/>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'

  import {s3Pages, battleAtBlackhorse2018, battleAtBlackhorse2018Video, dodyRidgeRunFall2017} from '../scripts/routes'
  import {headTags} from '../assets/functions'

  export default {
    name: 'battle-at-blackhorse-2018',
    components: {
      BlogImage,
      BlogPost
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          battleAtBlackhorse2018
        ]),
        relatedPosts: await context.store.dispatch('loadPosts', [
          battleAtBlackhorse2018Video,
          dodyRidgeRunFall2017
        ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          'mountain, bike, race, enduro, trail, all mountain, time, blog, trails, blue, ridge, blue ridge, blue ridge parkway, glenwood horse trail, gnar, virginia',
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${battleAtBlackhorse2018}/`
      }
    }
  }
</script>
