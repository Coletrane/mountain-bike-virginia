<template>
  <blog-post :header-height="800"
             :image="img + 'viscoset.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        I first became aware of Cane Creek’s ViscoSet steering damper from <a href="http://teamdicky.blogspot.com/">
        Rich Dillen’s Bad Idea Racing blog</a>. Little did I know, this little wonder unit was designed to solve an E
        bike steering oscillation problem, mainly because Mr. Dillen failed to reveal or either overlooked that fact.
        Cane Creek’s website explained its intended function and makes no mention of mountain bikes nor trail riding
        use. Since I do not yet own a battery operated motor bicycle, the ViscoSet wouldn’t solve its prime directive
        for my intended uses. But it does provide an appealing alternative interpretation as a simple, elegant and
        incredibly easy way to improve steering stability when the trail gets lumpy.
      </div>
      <a href="http://www.canecreek.com/product/viscoset/">
        <blog-image :src="img + 'cane-creek-website-viscoset.jpg'"/>
      </a>
      <div class="blog-p">
        To hare scramble motorcycle racers, a steering damper is practically requisite gear right alongside fresh knobs
        and tear off goggles. Motorcycles have inherently more steering stability than a mountain bike without any
        damper, so added performance improvement must surely be significant for the woods motorcyclist. A bicycle, with
        its much lighter, twitchier steering box seems a logical candidate for added control and safety provided by a
        damper.
      </div>
      <div class="blog-p">
        This is not a new idea. Steering dampers have been around just short of the day the first high speed wobbles
        were experienced on 2 wheels, likely motorized. Seems to make obvious sense for the downhill crowd, which is
        precisely the target for Hopey’s more elaborate and pricier bicycle specific damper.
      </div>
      <blog-image :src="img + 'hopey.jpg'"/>
      <div class="blog-p caption center">
        The Hopey appears to be a
        fine product, although the installation process, and the monetary outlay, requires a greater level of commitment
        than the ViscoSet.
      </div>
      <div class="blog-p">
        The ViscoSet appears identical to any usual upper headset bit with just a tad more stack height and a smidge
        more weight. Installation is also the same as your current headset. Concealed within a sealed chamber are
        inter-leaved plates smeared with fluorocarbon gel which provide viscous damping friction, and in turn leavens
        wobbles and nasty oscillation. These plates can be re-stacked to increase or decrease damping, although I have
        yet to fumble about with that, choosing the factory setup since I installed the unit in April. I figured Cane
        Creek had that part well sorted by the time I came along.
      </div>
      <div class="blog-p">
        Turning the bars while stopped, a damping resistance is felt, but does not bind unpleasantly like an overtight
        headset. Just smooth, yet slower turning. Out on the trail, no notice of any unpleasant steering restrictions,
        but the benefits are clearly apparent. Riding rock gardens and ruts, steering is steadier and a degree safer.
        Railing turns becomes a noticeable, more confident maneuver.
      </div>
      <blog-image :src="img + 'steering-damper.jpg'"/>
      <div class="blog-p caption center">
        Needless to say, the quest for damped steering has lead us down some interesting paths.
      </div>
      <div class="blog-p">
        So for $80 and a more stable ride, is a Cane Creek a good investment for the trail rider looking for a degree of
        steering stability? I’m not taking mine off, even if it was designed for the battery motor bicycle I do not own.
        It works quite nicely on my trail bike, thank you.
      </div>
    </div>
  </blog-post>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import BlogImage from '../components/Images/BlogImage'

  import {s3Pages, caneCreekViscosetReview, dtSwiss54tRatchetReview, pivotSwitchbladeReview} from '../scripts/routes'
  import {headTags} from '../assets/functions'

  export default {
    name: 'cane-creek-viscoset-review',
    components: {
      BlogImage,
      BlogPost
    },
    async asyncData(context) {
      return {
        post: await context.store.dispatch('loadPosts', [
          caneCreekViscosetReview
        ]),
        relatedPosts:
          await context.store.dispatch('loadPosts', [
            dtSwiss54tRatchetReview,
            pivotSwitchbladeReview
          ])
      }
    },
    head() {
      if (this.post) {
        return headTags(
          this.post.title,
          this.post.description,
          'cane creek, headset, forty, viscoset, e-bike, mountain bike, parts, head, bearing, enduro, review',
          this.post
        )
      }
    },
    data() {
      return {
        img: `${s3Pages}/${caneCreekViscosetReview}/`
      }
    }
  }
</script>
