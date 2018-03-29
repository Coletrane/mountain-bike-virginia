<template>
  <div>
    <blog-post :header-height="900"
               :image="img + 'dt-swiss-54t-ratchet.jpg'"
               :post="post"
               :related-posts="relatedPosts">
      <div slot="content">
        <div class="blog-p">
          First off, I want to thank <a href="https://www.worldwidecyclery.com/">Worldwide Cyclery</a> for reaching out
          and asking me to do this review. Second off, for those wondering how difficult of an install involving the
          witchraft that is hubs, know that its so easy I <i>uninstalled</i> my ratchet for the sole purpose of this
          review.
        </div>
        <a href="https://www.worldwidecyclery.com/">
          <blog-image :src="img + 'worldwide-cyclery.png'"/>
        </a>
        <blog-image :src="img + 'tire-chain-whip.jpg'"/>
        <div class="blog-p">
          Both times installing this kit I found out I had the (un)fortunate fate of my cassette being frozen to the
          cassette body. This grand irony made the install that much easier, as I could just hammer the back of the
          cassette until the body came off the hub.
        </div>
        <blog-image :src="img + 'sunrace-46t-cassette.jpg'"/>
        <div class="blog-p">
          I think its important to highlight the install up front in a review because that adds (potential) cost to the
          price value equation going on in your head right now, but at this point its taken you longer to read up to
          here than the install would have, so that's quite enough of that.
        </div>
        <div class="blog-p">
          The <a
          href="https://www.worldwidecyclery.com/products/dt-swiss-54t-star-ratchet-kit-2-star-ratchets-2-springs-and-grease?nosto=frontpage-nosto-1">DT
          Swiss 54t Star Ratchet Upgrade Kit is around $100 </a>and offers a way for you to join the ranks of of quick
          engagement army using your existing DT Swiss hubs. This kit can go into 190, 240, 350, and 440 hubs.
          Modularity of this sort is something that is greatly welcomed in the new-standards-incompatibility-fest that
          is the mountain bike industry we all know and love. This ratchet offers 6.6° engagement, and is no slouch.
          There are times where I'm pedaling slowly and my hub is still ratcheting. (as you cans see in the video below)
          Engineers and gearheads(ratchetheads?) can read more about it <a
          href="https://www.dtswiss.com/en/technology/wheel-technology/ratchet-system-technology/">on DT Swiss's
          website</a>
        </div>
        <blog-image :src="img + 'dt-swiss-54t-vs-stock-ratchet.jpg'"/>
        <div class="blog-p center caption">
          My stock 18t (20° engagement) vs. the new 54t (6.6° engagement)
        </div>
        <div class="blog-p">
          Now, I'm sure I don't need to sell you on Quick Engagement™. Weather you're reading this or not, you know
          about it, and deep down you want it. You don't know why you want it. You're a downhill smashing, flow carving,
          endurbro that doesn't really care for technical trail features (where quick engagement reaches its full
          potential), but <strong>You Must Have IT.</strong> In all seriousness, quick engagement is the performance
          exhaust of mountain bikes. A lot of noise, a little performance increase. The DT Swiss system we have here,
          however, is stealth wealth to the core. No bright colored anodizing like competitors, and no
          attention-fetching noise. In fact, my hub is now quieter than when I had my stock 18t jammed up in there. No
          really, have a listen:
        </div>
        <youtube src="https://www.youtube.com/embed/O0eGYeTTHiQ"/>
        <div class="blog-p">
          All in all the DT Swiss 54t upgrade is $100 well spent. I rate it 4 out of 5 simply because there is no reason
          for an 18t, or a 36t, ratchet to even exist (if someone can think of a reason, please <a
          href="mailto:eloc49@gmail.com">mail to: 666 Ratchet Pkwy. Switzerland</a>), meaning no reason for this to even
          be a product because it should just come locked and loaded in every DT Swiss hub. Alas, I understand that
          after all, DT Swiss is a business and I bought it, because they sold it. At the end of the day you can't beat
          modularity and upgradability of these hubs. The fact that this ratchet is quieter than the already
          astoundingly quiet 18t hub is icing on the cake, and makes this truly a worthwhile upgrade.
        </div>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'
  import Youtube from '../components/Iframes/Youtube'

  import {s3Pages, dtSwiss54tRatchetReview, pivotSwitchbladeReview, caneCreekViscosetReview} from '../scripts/routes'
  import {headTags} from '../assets/functions'

  export default {
    name: 'dt-swiss-54t-ratchet-review',
    components: {
      Youtube,
      BlogPost,
      BlogImage
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          dtSwiss54tRatchetReview
        ]),
        relatedPosts: [
          await context.store.dispatch('loadPosts', [
            pivotSwitchbladeReview,
            caneCreekViscosetReview
          ])
        ]
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          'hub, dt swiss, ratchet, quick engagement, review, product review, mountain bike, dt swiss 240, dt swiss 350, upgrade, kit, trail, enduro, trials',
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${dtSwiss54tRatchetReview}/`
      }
    }
  }
</script>
