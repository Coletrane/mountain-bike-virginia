<template>
  <blog-post :image="img + 'P1020331.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        As I sit on a rock, dripping wet from a cocktail of sweat, fog, and humidity, I think to myself, "we have this area, and that area, a
      </p>
      <p>
        <a href="https://www.strava.com/activities/1720842111"
           class="strava-link">
          View this ride on Strava
          <font-awesome-icon :icon="faStrava"/>
        </a>
      </p>
      <blog-image :src="img + 'P1020274.jpg'"/>
      <blog-image :src="img + 'P1020279.jpg'"/>
      <p class="caption">
        Brandon Johnson forgetting his shoes in perfect fashion. He and the ride organizer, Ryan Sheets drove an hour out to Roanoke and back for some Five Ten magic.
      </p>
      <blog-image :src="img + 'P1020280.jpg'"/>
      <blog-image :src="img + 'P1020283.jpg'"/>
      <blog-image :src="img + 'P1020285.jpg'"/>
      <blog-image :src="img + 'P1020287.jpg'"/>
      <blog-image :src="img + 'P1020294.jpg'"/>
      <p>
        <strong>Do not</strong> get it twisted. These are some strong riders, and it is perfectly fine to walk when your elevation profile looks like this:
        <blog-image :src="img + 'dragons-back-elevation-profile.jpg'"/>
      </p>
      <blog-image :src="img + 'P1020304.jpg'"/>
      <blog-image :src="img + 'P1020305.jpg'"/>
      <blog-image :src="img + 'P1020306.jpg'"/>
      <blog-image :src="img + 'P1020307.jpg'"/>
      <blog-image :src="img + 'P1020308.jpg'"/>
      <blog-image :src="img + 'P1020309.jpg'"/>
      <blog-image :src="img + 'P1020310.jpg'"/>
      <blog-image :src="img + 'P1020311.jpg'"/>
      <blog-image :src="img + 'P1020318.jpg'"/>
      <blog-image :src="img + 'P1020320.jpg'"/>
      <blog-image :src="img + 'P1020321.jpg'"/>
      <blog-image :src="img + 'P1020324.jpg'"/>
      <blog-image :src="img + 'P1020329.jpg'"/>
      <blog-image :src="img + 'P1020331.jpg'"/>
      <p class="caption">
        This is <strong>not</strong> the Grouse trail descent that had absolutely everybody crashing and cutting tires, but this is pretty much how the Grouse descent went.
      </p>
      <blog-image :src="img + 'P1020334.jpg'"/>
      <blog-image :src="img + 'P1020335.jpg'"/>
      <blog-image :src="img + 'P1020336.jpg'"/>
      <blog-image :src="img + 'P1020338.jpg'"/>
      <blog-image :src="img + 'P1020339.jpg'"/>
      <blog-image :src="img + 'P1020340.jpg'"/>
      <blog-image :src="img + 'P1020344.jpg'"/>
      <blog-image :src="img + 'P1020346.jpg'"/>
      <blog-image :src="img + 'P1020351.jpg'"/>
      <blog-image :src="img + 'P1020354.jpg'"/>
      <blog-image :src="img + 'P1020355.jpg'"/>
      <blog-image :src="img + 'P1020357.jpg'"/>
      <blog-image :src="img + 'P1020361.jpg'"/>
      <blog-image :src="img + 'P1020362.jpg'"/>
      <blog-image :src="img + 'P1020363.jpg'"/>
      <blog-image :src="img + 'P1020366.jpg'"/>
      <blog-image :src="img + 'P1020367.jpg'"/>
      <blog-image :src="img + 'P1020368.jpg'"/>
      <blog-image :src="img + 'P1020372.jpg'"/>
      <p class="caption">
        Remarkably, Brandon and Ryan managed to catch up to us before we even descended off the ridge!
      </p>
      <blog-image :src="img + 'P1020374.jpg'"/>
      <blog-image :src="img + 'P1020375.jpg'"/>
      <blog-image :src="img + 'P1020378.jpg'"/>
      <blog-image :src="img + 'P1020381.jpg'"/>
      <blog-image :src="img + 'P1020382.jpg'"/>
      <blog-image :src="img + 'P1020383.jpg'"/>
      <blog-image :src="img + 'P1020384.jpg'"/>
      <blog-image :src="img + 'P1020387.jpg'"/>
      <blog-image :src="img + 'P1020388.jpg'"/>
      <blog-image :src="img + 'P1020386.jpg'"/>
      <blog-image :src="img + 'P1020389.jpg'"/>
      <blog-image :src="img + 'P1020391.jpg'"/>
      <blog-image :src="img + 'P1020394.jpg'"/>
      <blog-image :src="img + 'P1020398.jpg'"/>
      <blog-image :src="img + 'P1020400.jpg'"/>
      <blog-image :src="img + 'P1020402.jpg'"/>
      <blog-image :src="img + 'P1020405.jpg'"/>
      <blog-image :src="img + 'P1020409.jpg'"/>
      <blog-image :src="img + 'P1020414.jpg'"/>
      <blog-image :src="img + 'P1020415.jpg'"/>
      <p class="caption">
        Yukon Cornelius has far more stoke than you can imagine.
      </p>
      <blog-image :src="img + 'P1020417.jpg'"/>
      <blog-image :src="img + 'P1020419.jpg'"/>
      <blog-image :src="img + 'P1020420.jpg'"/>
      <blog-image :src="img + 'P1020423.jpg'"/>
      <blog-image :src="img + 'P1020427.jpg'"/>
      <blog-image :src="img + 'P1020429.jpg'"/>
      <m-t-b-v-a-video :src="img + 'P1020432.mp4'"
                       autoplay
                       muted
                       loop/>
      <blog-image :src="img + 'P1020436.jpg'"/>
      <blog-image :src="img + 'P1020439.jpg'"/>
      <blog-image :src="img + 'P1020442.jpg'"/>
      <p class="caption">
        Ken Lee claims his Commencal weighs just 28lbs with his current setup. He would put a total of 4 tubes in that Maxxis Minion SS before the day was over.
      </p>
      <blog-image :src="img + 'P1020443.jpg'"/>
      <blog-image :src="img + 'P1020445.jpg'"/>
      <blog-image :src="img + 'P1020447.jpg'"/>
      <blog-image :src="img + 'P1020449.jpg'"/>
      <blog-image :src="img + 'P1020450.jpg'"/>
      <m-t-b-v-a-video :src=" img + 'P1020451.mp4'"
                       autoplay
                       muted
                       loop />
      <blog-image :src="img + 'P1020454.jpg'"/>
      <blog-image :src="img + 'P1020457.jpg'"/>
      <p class="caption">
        Ken Lee has enough rubbers to have a good time.
      </p>
      <blog-image :src="img + 'P1020460.jpg'"/>
      <blog-image :src="img + 'P1020459.jpg'"/>
      <blog-image :src="img + 'P1020464.jpg'"/>
      <blog-image :src="img + 'P1020465.jpg'"/>
      <p>
        <nuxt-link :to="{name: 'shop-dragons-back-tshirt'}"> Purchase a Dragon's Back T-Shirt here.</nuxt-link> $3 of every sale goes towards maintenance of the North Mountain trails!
      </p>
      <blog-image :src="img + 'P1020466.jpg'"/>
      <blog-image :src="img + 'P1020467.jpg'"/>
      <blog-image :src="img + 'P1020471.jpg'"/>
      <blog-image :src="img + 'P1020472.jpg'"/>
      <blog-image :src="img + 'P1020474.jpg'"/>
      <blog-image :src="img + 'P1020475.jpg'"/>
      <blog-image :src="img + 'P1020477.jpg'"/>
      <blog-image :src="img + 'P1020478.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "@/components/BlogPost"
import BlogImage from "@/components/Images/BlogImage"
import MTBVAVideo from "../../components/Iframes/MTBVAVideo"
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faStrava from "@fortawesome/fontawesome-free-brands/faStrava"

import blogPost from "@/assets/mixins/blog-post"

export default {
  name: "events-dragons-back-foggy-summer-2018",
  components: {
    BlogImage,
    BlogPost,
    FontAwesomeIcon,
    MTBVAVideo
  },
  mixins: [blogPost],
  data() {
    return {
      faStrava: faStrava
    }
  }
}
</script>
<style scoped>
.video-wrapper {
  padding-bottom: 52.25% !important;
}
</style>
<style>
.strava-link svg {
  background: transparent !important;
  font-size: 1.5rem !important;
  color: #fc4c02;
}
</style>
