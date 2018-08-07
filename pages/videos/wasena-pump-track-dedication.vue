<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             header-author
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        Roanoke got pumped on August 2, 2018 in a whole new way by means of a manufactured traveling pump track.
        Formerly a centerpiece of Roanoke’s Go Outside festival, the track found itself planted to the ground of
        Roanoke’s Wasena Park alongside the greenway on the banks of the Roanoke River. How did this humpy, banked turn
        funzone come to rest here? Look no further than mountain biker and idealist Jeff Glenn who was suddenly struck
        with inspiration whilst sipping a GO Fest libation last October.
      </p>
      <p>
        “We buy the damn thing and plunk it in a park as the first piece of a grander concept (thought no one but Mr.
        Glenn)”!
      </p>
      <p>
        Consumed by this passion, the pump track visionary got real busy. First, he found out if the track was for sale?
        Of course it is. Everything is for a price and that price is $27,000, bubba--tags, title, trailer and all.
      </p>
      <p>
        Next, he zoomed from friend to acquaintance to stranger proposing his hairbrained vision while asking for cash
        in the form of tax deductible donations. After all, if the deal wasn’t made within 2 days time, the track would
        hightail outta town straight down to the next gig.
      </p>
      <p>
        Yet iron determination and sheer will to succeed, Mr. Glenn could not would not be denied. If one man could lift
        a grand piano over his head that day it was Jeff Glenn. He even took to convincing the missus, Sarah, that
        taking all their savings for a California vacation was a good idea. Imagine her shock and surprise and oh what a
        great lady she is!
      </p>
      <p>
        As a board member of Roanoke’s active mountain bike club1, Mr. Glenn effectively rallied support in that camp as
        well.
      </p>
      <p>
        The money came in by hook and by crook just as the trailer was hitched, about to pull outta town. The rally
        concluded with 24 individual donors in 48 hours, with the last chunk arriving just in time: 27 large.
      </p>
      <p>
        Whoa, hang on! Would the city even want the damn thing even when the deal came down? After all, park planning is
        a protracted process, so donating a new thing no matter how cool it is or how good it feels was not likely
        scribbled on any planning room white board. Roanoke Parks and Rec chief Michael Clark came through, however, and
        how cool is that? Site planning and all that stuff took place and the track found an ideal home in the center of
        the hip southwest city Wasena neighborhood. Most assembly took place on a single day in July with landscaping
        the next.
      </p>
      <p>
        Yet Mr. Glenn remains far from done. His vision calls for a multi-component bicycle skills improvement
        playground at Wasena, with the particulars of that being brainstormed at this moment. While manufactured
        equipment is readily available (for a price of course), the pieces might just as well be built with natural
        ingredients--like rocks--or custom built to spec. If you have experience or ideas on this, please scribble us a
        line with those suggestions.
      </p>
      <p>
        So if you think of it, believe it, then do it, and do it real hard real fast, it will happen. That might well
        indeed be Jeff Glenn’s convoluted-yet-deadly mantra.
      </p>
      <youtube :src="post.ytSrc"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import Youtube from "../../components/Iframes/Youtube"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "wasena-pump-track-dedication",
  components: {
    BlogPost,
    Youtube
  },
  mixins: [blogPost]
}
</script>
