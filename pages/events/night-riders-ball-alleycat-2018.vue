<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        My love of alleycat races started at GO Fest 2017 where Carlo Dy hosted the Friday the 13th alleycat. Carlo puts
        on a great event that feels just official enough without taking itself too seriously, a personification of
        cycling itself in many ways. Needless to say, I had a blast at the first alleycat and was delighted when he
        asked me to run one of the stops for the Ride Solutions Night Riders Ball.
      </p>
      <blog-image :src="img + 'IMG_3650.jpg'"/>
      <blog-image :src="img + 'IMG_3653.jpg'"/>
      <blog-image :src="img + 'IMG_3654.jpg'"/>
      <blog-image :src="img + 'IMG_3655.jpg'"/>
      <blog-image :src="img + 'IMG_3656.jpg'"/>
      <blog-image :src="img + 'IMG_3657.jpg'"/>
      <p>
        The Night Riders ball is a special event put on by Ride Solutions, a company that owns and maintains a number of
        bike share docks around the city. For a small fee, you can rent your very own Zagster bike complete with basket
        and tail lights. The Night Rider's Ball is the final event for the month of May, Bike Month, and offers free
        entry and bike valet to those who ride to the event.
      </p>
      <blog-image :src="img + 'IMG_3659.jpg'"/>
      <blog-image :src="img + 'IMG_3660.jpg'"/>
      <blog-image :src="img + 'IMG_3663.jpg'"/>
      <blog-image :src="img + 'IMG_3665.jpg'"/>
      <blog-image :src="img + 'IMG_3667.jpg'"/>
      <blog-image :src="img + 'IMG_3669.jpg'"/>
      <blog-image :src="img + 'IMG_3671.jpg'"/>
      <blog-image :src="img + 'IMG_3674.jpg'"/>
      <blog-image :src="img + 'IMG_3675.jpg'"/>
      <youtube src="https://www.youtube.com/embed/dIBNhdFepYg"/>
      <p>
        Having just done the classic <a href="https://www.strava.com/activities/1582832808">Spec Dody loop</a> out in
        Blue Ridge, I was pressed for time to get my station's supplies. My plan, walk into Kroger come out with a case
        of beer, and something to make the riders drink said beer.
      </p>
      <blog-image :src="img + 'P1010863.jpg'"/>
      <blog-image :src="img + 'P1010874.jpg'"/>
      <p>
        If you haven't played the game of Beer Ball, I highly suggest you do, it is more fun than all the other Red Solo
        Cup drinking games combined. This was my original plan, but alas Kroger had no regular ping pong balls, so I
        opted for the hilariously named Red Jr. Activity Pack (miniature beer pong) A case of Genesee and some bikes to
        get you to it are the only ingredients to a good time on an alleycat.
      </p>
      <blog-image :src="img + 'P1010876.jpg'"/>
      <p>
        My rules are simple, you get one shot, if you miss, you chug a beer.
      </p>
      <blog-image :src="img + 'P1010878.jpg'"/>
      <p class="caption">
        Suddenly, a wild Kyle Inman appeared on a ballooner bike.
      </p>
      <blog-image :src="img + 'IMG_3680.jpg'"/>
      <blog-image :src="img + 'IMG_3682.jpg'"/>
      <quote>
        <span slot="quote">
          A Drunkcyclist shirt means you
          <span style="text-decoration: underline;">must</span>
          chug a beer
        </span>
      </quote>
      <blog-image :src="img + 'P1010872.jpg'"/>
      <blog-image :src="img + 'P1010885.jpg'"/>
      <blog-image :src="img + 'P1010900.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"
import Quote from "../../components/Card/Quote"
import Youtube from "../../components/Iframes/Youtube"

import blogPost from "../../mixins/blog-post"

export default {
  name: "night-riders-ball-alleycat-2018",
  components: {
    BlogPost,
    BlogImage,
    Quote,
    Youtube
  },
  mixins: [blogPost]
}
</script>
