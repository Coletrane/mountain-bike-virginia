<template>
  <div>
    <blog-post :image="img + 'stokesville-market-snow.jpg'"
               :post="post"
               no-title
               :related-posts="relatedPosts">
      <div slot="content">
        <div class="blog-p">
          <a href="https://www.facebook.com/robert.issem">Rob Issem</a> has truly earned his title Captain Insane-O for
          conjuring up a race that scoffs at the though of being called an Epic. Epic ain't the word. The RockStar VA
          gets its absolutley perfect name from the town of Harrisonburg, also known as Rocktown, and the town of
          Roanoke, also known as The Star City. The race offers 3 grueling routes, trail (270 miles, 36k feet), gravel
          (260 miles, 20k feet), and pave (164 miles, 9.7k feet). Two facts stand out as astounding statements to the
          nature of the area in which this race takes place. This is a one way, 270 mile ride on trail that only gives
          you a taste of each trail section. The trail and gravel routes don't diverge until mile 36.
        </div>
        <div>
          <div class="row route-selection">
            <button class="route-btn black-btn col-4"
                    :class="buttonSelected('trail')"
                    @click="selectRaceRoute('trail')">
              Trail
            </button>
            <button class="route-btn black-btn col-4"
                    :class="buttonSelected('gravel')"
                    @click="selectRaceRoute('gravel')">
              Gravel
            </button>
            <button class="route-btn black-btn col-4"
                    :class="buttonSelected('pave')"
                    @click="selectRaceRoute('pave')">
              Pave
            </button>

            <ride-with-gps v-if="selectedRaceRoute === 'trail'"
                           url="https://rwgps-embeds.com/embeds?type=route&id=27086614&sampleGraph=true"/>
            <ride-with-gps v-if="selectedRaceRoute === 'gravel'"
                           url="https://rwgps-embeds.com/embeds?type=route&id=27056025&sampleGraph=true"/>
            <ride-with-gps v-if="selectedRaceRoute === 'pave'"
                           url="https://rwgps-embeds.com/embeds?type=route&id=27086777&sampleGraph=true"/>
          </div>
        </div>
        <div class="blog-p">
          I want to give a huge round of applause to the 35 racers that started this event. Prior to the start date the person I was teaming with said he no longer wanted to do an insane multi-day bikepacking trip, fair enough. On top of this the weather turned abysmal, as it does for the first year of any event, especially one this ostentatious. The forecast: 3 to 8 inches of snow, and a low of 25 degrees over night on Saturday. The fact that all these racers took that situation, gnashed their teeth and took it head on is truly remarkable.
        </div>
        <blog-image :src="img + 'cold-temps.jpg'"/>
        <div class="blog-p">
          After a <i>relatively</i>  chill night with my friends from college. I set out to Black Sheep Coffee to get my Spot tracker and hopefully find someone with a similar pace that I could camp with. I was immediately smacked in the face with the motif that would follow this whole weekend. I needed fresh AAA batteries for my Spot tracker but only had heavy duty 18650s. (and a lot of them) This was my first foray into bikepacking, I packed wrong.
        </div>
        <blog-image :src="img + 'pack-knolling.jpg'"/>
        <div class="blog-p center caption">
          If you don't think you need a frame bag or two, you're wrong.
        </div>
        <blog-image :src="img + 'turner-knolling.jpg'"/>
        <div class="blog-p">
          We set out and hit the downhill pump track at Hillandale Park before a 12 mile rolling section through rural Dale Enterprise and Hinton. This section is a perfect warm up, and you will want a warm up, because what comes next is hainus in every sense. 2,900 feet in 12 miles is what you will be gaining up Slate Springs Mountain, you may be stopping, and you will certainly be pushing if you are a loaded down bikepacking rig.
        </div>
        <div class="blog-p">
          Given the grim look of the weather, my misfortune in packing half my weight on my back, and the fact that I was alone, about halfway up this climb I contemplated bailing. The thing that was ailen about this bail contemplation was that it had nothing to do with physical ability, it was all to do with safety. Stone Spring Mountain climb is made more intimidating by the fact that you will be touching and even crossing the West Virginia border in spots. I came to a pretty healthy creek with no good way to cross. I begin to step from rock to rock, careful as I go to not get wet <i>this early</i> I stop right in the middle, and ponder turning around once more. Time slowed as I weighed the pros and cons of this decision. I press on, and make it without a drop of water in my shoes. I ride a little farther down to the next creek, and then turn around.
        </div>
        <blog-image :src="img + 'turner-bottom-creek.jpg'"/>
        <div class="blog-p">
          Just as I turn around, off in the cold distance, 2 riders were approaching, and the wind began to howl. One on a loaded Ibis HD4 and another on a less loaded Raleigh gravel bike. Travis Jones, doing the trail route on the Ibis makes it across with ease. Ed Bridge, doing the gravel route on the Raleigh goes head on into the somewhat deep creek, gets caught on his pedal, and gets both his feet soaked. Ed don't care. He dumps his shoes out and keeps going. I asked if they would be keeping this pace and suggested we camp together, of which these two characters agreed.
        </div>
        <blog-image :src="img + 'ed-pointing-creek.jpg'"/>
        <div class="blog-p">
          We ascended up Stone Spring and reached the ridge by midday. Towards the middle of the ridge there is a large clearing up on a plateau that the trail leads to. We heard dirt bikes idling in the distance. Suddenly, they sped off past us from the top of the plateau. Feeling less entrenched in the backwoods, yet still unsure of what we would find at the top we pressed on.
        </div>
        <m-t-b-v-a-video :src="img + 'jeep-clearing.mp4'"
                         autoplay
                         muted
                         preload
                         loop/>
        <div class="blog-p">
          A group of friendly Jeep enthusiasts who hadn't kitted out their machines to merely park them at the mall were what we found. Satisfied just to rest for a while we chatted, then all too soon made our way down the path again. It was quite a shame the temperature was so low on the ridge, because there are many good places to camp, and even a metal pipe spring coming out of the wall of rock. (keep your eyes on the right as you go down towards Reddish Knob)</div>
        <blog-image :src="img + 'turner-snow.jpg'"/>
        <quote quote="I'd rate this trail a 2 out of 10"
               person="One of the Jeep Fellows"/>
        <blog-image :src="img + 'jeeps-snow.jpg'"/>
        <quote quote="This 2 is gonna become a 10 real quick if we don't get off this rock"/>
        <div class="blog-p">

            The Jeeps eventually caught up, just as it began to snow.
        </div>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import MTBVAVideo from '../components/Iframes/MTBVAVideo'
  import Quote from '../components/Card/Quote'

  import {s3Pages, rockstarVa2018, middleMtMomma2018, creature2017Recap} from '../scripts/routes'
  import {headTags} from '../assets/functions'
  import {home} from '../assets/head-tags'

  export default {
    name: 'rockstar-va-2018',
    components: {
      RideWithGps,
      MTBVAVideo,
      Quote,
      BlogImage,
      BlogPost
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          rockstarVa2018
        ]),
        relatedPosts: await context.store.dispatch('loadPosts', [
          middleMtMomma2018,
          creature2017Recap
        ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.subtitle,
          home.keywords,
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${rockstarVa2018}/`,
        selectedRaceRoute: 'trail'
      }
    },
    methods: {
      selectRaceRoute(raceRoute) {
        this.selectedRaceRoute = raceRoute
      },
      buttonSelected(raceRoute) {
        if (this.selectedRaceRoute === raceRoute) {
          return 'black-btn-selected'
        }
      }
    }
  }
</script>

<style scoped>
  .route-selection {
    margin: 0;
    background: black;
    text-align: center
  }
</style>
