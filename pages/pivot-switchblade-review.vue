<template>
  <div>
    <blog-post
      :header-height="700"
      :image="img + 'IMG_3009.jpg'"
      :post="post">
      <div slot="content">
        <div class="blog-p">
          Upon being a convert to the church of the DW Link, my interest in Pivot Cycles far outmatches many other
          companies. Attending the Pivot demo was a must, for I yearned to know if the secret sauce tasted just as good
          on a different sandwich.
        </div>
        <div class="blog-p">
          I arrive at the demo and of course there are no large 29ers in sight. I agree to take the 27.5 Plus
          Switchblade out while I wait for a bike with wheels in the correct size. My course is Percy Warner Park in
          Nashville TN. Percy has some XCish trails, no big climbs, and a main feature downhill/bike park section.
          Seemingly the perfect combo for my bike with too much rubber. The Switchblade is LOW, and slack, a winning 1-2
          punch in the modern mountain bike industry. Yet, there is nothing winning about how many times I struck my
          pedal. Yes, yes, I know, time my pedaling better, but the problem with that is that there are an array of
          bikes (one sitting in my car right now) where striking pedals is of no concern. I head to the Broduro section
          of this already washed out course, just as a light rain begins. Ah, here\'s where the plus will shine, nimble
          and grippy. The bike absolutely demolishes the bike park section, giving me more confidence than I feel even
          on my own horse. At the bottom I continue this confidence until, finally, she lets go. I lose the rear and go
          crashing down, and not even 2.8 inches of Maxxis Rekon knobby rubber could save me. I promptly return the bike
          with the XTR derailleur shifting just as when I received it.
        </div>
        <blog-image :src="img + 'IMG_3005.jpg'"/>
        <div class="blog-p">
          Brendan, or as I call him, Pivot Jesus, promptly switches the 27.5 plus wheels for 29s. This is possible by
          some foreign technology Pivot Jesus calls "Super Boost" which is actually just downhill spacing, and another
          spacing you don't have hubs for. At the very least downhill spacing will actually fulfill its promise of
          stiffness you can feel unlike the 5mm lie the industry has hoist upon us. The 29er is sublime. It is right at
          the end of the threshold of too low without crossing it. The 67.25° head tube angle sits in this same
          equilibrium. The Fox 36 Factory 150mm fork (despite its negative air issues, causing me to bottom it out
          previously) is just that, a fork. Its good, not as good as a Pike, nothing unexpected here. The 135mm Fox
          Float shock is plush, yet climbs well. I never even thought about the lockout switch. I suspect the DW Link is
          to blame here as the Pivot 429 Trail and my own Turner Sultan (with a Cane Creek DB Air) climb just as well.
        </div>
        <blog-image :src="img + 'IMG_3011.jpg'"/>
        <div class="blog-p">
          The Pivot Switchblade marks a convergence on the map of the discipline captivated mountain bike industry. It
          can run any tires you want, climb anything you want, and give you PRs on any type of descent. It is neither a
          Trail bike, nor an Enduro bike, nor an All Mountain bike, but it is all three. Yet it is also none of these. A
          machine that holds practical utility buried under an audaciously indifferent style. This knife carves its own
          path, as it propels you down yours.
        </div>
      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogPost from "../components/BlogPost.vue"
  import BlogImage from "../components/BlogImage"

  import * as routes from '../routes'
  import {posts} from "../assets/posts"
  import {headTags} from "../assets/functions"

  const post = posts.pivotSwitchbladeReview

  export default {
    name: "pivot-switchblade-review",
    components: {
      BlogPost,
      BlogImage
    },
    head() {
      return headTags(
        "Review: Pivot Switchblade",
        "Review of the 27.5 plus and 29 Pivot Switchblade in a beautiful blue",
        "mountain, bike, pivot, carbon, pivot bikes, review, switchblade, 29, 27 plus, 29er, enduro, all mountain, trail",
        post
      )
    },
    data() {
      return {
        img: `${routes.s3}${routes.s3Pages}${post.route}/`,
        post: post
      }
    }
  }
</script>
