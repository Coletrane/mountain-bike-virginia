<template>
  <blog-post :image="img + 'cole-tree-cut.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        The entry fee for the <a :href="$store.getters.posts('rockstar-va-2018').fbEvent">RockStar VA</a> race/ride
        captures the spirit of backcountry riding exquisitely. Entrants can either donate to a trail work advocacy
        group, or complete 10 hours of trail work. Seeing as the latter involves me out exploring and riding, the trail
        work option was the only choice. Armed with information from <a href="https://www.facebook.com/robert.issem">Rob
        Issem</a> me and my father set out to clear the Hoop Hole Iron Ore trail.
      </div>
      <blog-image :src="img + 'hoop-hole-sign.jpg'"/>
      <div class="blog-p">
        Great minds really <i>do</i> think alike, because when we pulled up none other than Renee and Steve Powers
        showed up. We found they had a plan to do some work on the upper loop. Renee ranks the Hoop Hole upper loop as
        her favorite trail of all time, and Steve, a monster of a rider, says the descent is an hour long! Alas, the
        RockStar will not be touching this portion of trail, so we parted ways.
      </div>
      <blog-image :src="img + 'hoop-hole-parking-lot.jpg'"/>
      <div class="blog-p">
        After doing the small Roaring Run waterfall trail, and taking a gander at the Roaring Run Furnace (which is in
        impecable condition) we began on the Iron Ore trail.
      </div>
      <blog-image :src="img + 'roaring-run-furnace.jpg'"/>
      <div class="blog-p">
        <strong><i>Immediately</i></strong> we were showered with tree after tree down. Most were rotten, but still took
        a good deal of sawing to break into a more movable piece. Some were rideable, but we made a point to clear them
        out anyway, if possible. This climb isn't hard, nor is it easy. We strove to make it as painless as a 1,000 foot
        climb can be on mile 175 a race.
      </div>
      <blog-image :src="img + 'cole-tree-cut-2.jpg'"/>
      <div class="blog-p">
        While it certainly helps, trail work doesn't have to be a full fledged workday with chainsaws. <strong>"Be
        selfish when you move things off the trail, it helps everybody."</strong> Kyle Inman's, words on clearing out
        the trail as you ride. Any bit helps and all it involves is whipping out a Japanese Gomboy saw for a few minutes
        on some of your more off the map rides. I would like to thank Renee Powers for everything she does both in
        municipal trails and national forest. That level of dedication even when not on the clock is the same spirit of
        true backcountry riding that brought me to this great trail.
      </div>
      <blog-image :src="img + 'kyle-tree-cut.jpg'"/>
      <blog-image :src="img + 'cole-tree-throw.jpg'"/>
      <div class="blog-p center">
        I'll see you on the RockStar.
      </div>
      <blog-image :src="img + 'cole-sly-lookback.jpg'"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../components/BlogPost"
import BlogImage from "../components/Images/BlogImage"

import blogPost from "../assets/mixins/blog-post"

export default {
  name: "hoop-hole-trail-work-2018",
  components: {
    BlogPost,
    BlogImage
  },
  mixins: [blogPost]
}
</script>
