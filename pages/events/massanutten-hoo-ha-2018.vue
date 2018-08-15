<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        Came Hell or high water (the latter delivered in tidal waves), the 30th Massanutten Hoo-Ha! is in the books.
        Dateline Keezletown, VA, 1989. An ambitious ski manager early adopts the mountain bike thing and throws a
        whimsically titled event on a lark, complete with equally whimsical log pull and lake jump contests. Though the
        lake jump and log pull have been left by the trailside, the Hoo-Ha! continued the next 29 years with Kenny Hess
        still at the helm of one of the most enduring events in mountain bike racing, with a bright forecast for years
        to come.
      </p>
      <blog-image :src="img + 'IMG_3686.jpg'"/>
      <blog-image :src="img + 'IMG_3688.jpg'"/>
      <blog-image :src="img + 'IMG_3690.jpg'"/>
      <p class="caption">
        Adam Williams from Rocktown Bicycles shredding on his new Specialized Stumpy. Adam would eventually take second
        in the Enduro and the XC race.
      </p>
      <blog-image :src="img + 'IMG_3692.jpg'"/>
      <p class="caption">
        Matt Clements from Roanoke coming in hot after his van blew up on the highway. Matt's determination brought him
        to a 5th place finish int he Enduro.
      </p>
      <blog-image :src="img + 'IMG_3694.jpg'"/>
      <blog-image :src="img + 'IMG_3696.jpg'"/>
      <blog-image :src="img + 'IMG_3697.jpg'"/>
      <blog-image :src="img + 'IMG_3700.jpg'"/>
      <blog-image :src="img + 'IMG_3701.jpg'"/>
      <blog-image :src="img + 'IMG_3703.jpg'"/>
      <p>
        But bright forecasts were not to be had the first weekend of June, 2018 on the western slope of Massanutten
        Mountain. The Saturday enduro kicked off with light rain that devolved into dark, drenches during stage 4 on K2,
        resulting in the sacking of stage 5. No matter, the field of around 70 was of fine spirit, and the riding was
        down right amazing despite conditions. Salsa pro locals double teamed for the men/women high podium spot, Sam
        Skidmore and Lindsey Carpenter. Jonathon Cox, Jr collected the junior title with inspiring riding throughout the
        younger ranks.
      </p>
      <blog-image :src="img + 'IMG_3705.jpg'"/>
      <blog-image :src="img + 'IMG_3707.jpg'"/>
      <blog-image :src="img + 'IMG_3709.jpg'"/>
      <blog-image :src="img + 'IMG_3712.jpg'"/>
      <blog-image :src="img + 'IMG_3717.jpg'"/>
      <blog-image :src="img + 'IMG_3722.jpg'"/>
      <blog-image :src="img + 'IMG_3730.jpg'"/>
      <blog-image :src="img + 'IMG_3737.jpg'"/>
      <blog-image :src="img + 'IMG_3751.jpg'"/>
      <blog-image :src="img + 'IMG_3756.jpg'"/>
      <blog-image :src="img + 'IMG_3762.jpg'"/>
      <p>
        That night, more rain throughout, spilling creeks out of already spilt banks and into places water ought not be.
        One of those places was nearly every trail on the mountain, transformed into creeks themselves for the brave
        XXC/XC racers on Sunday. Again, no matter, smiles and positive energy flowed stronger than any ol’ water, and a
        sturdy group filled out the field nicely. For safety considerations, the XXC route was rejiggered to stay clear
        of raging national forest creek crossings. Precipitation predicted by the national weather service never really
        materialized, good.
      </p>
      <blog-image :src="img + 'IMG_3763.jpg'"/>
      <blog-image :src="img + 'IMG_3765.jpg'"/>
      <blog-image :src="img + 'IMG_3767.jpg'"/>
      <blog-image :src="img + 'IMG_3769.jpg'"/>
      <p class="caption">
        Multi national champion <a href="https://susanhaywood.com/">Sue Haywood</a> endurbroing it up! Sue had some
        mechanical trouble on the second stage, but was able to fix it on a transfer and take away a 5th place finish!
      </p>
      <blog-image :src="img + 'IMG_3775.jpg'"/>
      <blog-image :src="img + 'IMG_3777.jpg'"/>
      <blog-image :src="img + 'IMG_3781.jpg'"/>
      <blog-image :src="img + 'IMG_3783.jpg'"/>
      <blog-image :src="img + 'IMG_3787.jpg'"/>
      <blog-image :src="img + 'IMG_3788.jpg'"/>
      <blog-image :src="img + 'IMG_3790.jpg'"/>
      <p class="caption">
        Anna Sortore from Roanoke walked away with a 4th place finish in the Enduro.
      </p>
      <blog-image :src="img + 'IMG_3793.jpg'"/>
      <blog-image :src="img + 'IMG_3796.jpg'"/>
      <blog-image :src="img + 'IMG_3797.jpg'"/>
      <blog-image :src="img + 'IMG_3806.jpg'"/>
      <blog-image :src="img + 'IMG_3810.jpg'"/>
      <p>
        In the end, the Hoo-Ha’s 30th birthday was a singular, epic event. Congratulations to all who weathered the
        storm for an experience not to be forgotten. Congratulations to the race directors, Kenny Hess, Jonathon Albert,
        and Ian McAlexander (plus many more) for a job well done. And for those who helped build the best kind of event
        through the years--Kenny, George Willetts, Steve Showalter and crew. Shenandoah Bicycle Coalition, you do a fine
        job of building amazing and creative trails. So the forecast for your first weekend of June, 2019? Hoo-Ha! #31!
      </p>
      <blog-image :src="img + 'IMG_3818.jpg'"/>
      <blog-image :src="img + 'IMG_3822.jpg'"/>
      <blog-image :src="img + 'IMG_3825.jpg'"/>
      <blog-image :src="img + 'IMG_3828.jpg'"/>
      <div class="blog-p">
        <div>
          <a href="https://www.massresort.com/upload/photos/page_623_massanutten-2018-enduro-results.pdf">
            Enduro Results
          </a>
        </div>
        <div>
          <a href="https://www.massresort.com/upload/photos/page_623_massanutten-2018-xc-results.pdf">
            XC & XXC Results
          </a>
        </div>
      </div>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faBicycle from "@fortawesome/fontawesome-free-solid/faBicycle"
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "massanutten-hoo-ha-2018",
  components: {
    BlogPost,
    BlogImage,
    FontAwesomeIcon
  },
  mixins: [blogPost],
  data() {
    return {
      faBicycle: faBicycle,
      faFacebook: faFacebook
    }
  }
}
</script>
