<template>
    <blog-post
            :header-height="headerHeight"
            :image="image"
            :post="post">
        <div slot="content">
            <div class="blog-p">
                The morning of October 29th, 2017, I was intending to have balls. I was <i>indending</i> to just say "I'm doin it." However, I woke up that morning, to a pouring rain in a cutting 40° with 30mph winds. The colloquial, <i>It</i> I am referring to is Rowdy Dog, in Blacksburg Virginia, the last of the XXC races for the season.
            </div>
            <div class="blog-p">
                Having driven all the way from Nashville, I had to take advantage of the arena I had one more day to spend in. So me and the legend Kyle Inman headed to the Blue Ridge Parkway, our mission, make it.
            </div>
            <img class="blog-img" src="./img/IMG_3795.jpg">
            <div class="blog-p">
                Upon reaching the entrance into the abyss known as Spec Mines, we began to get showered with sleet. On our descent I lost my hands. We were now in the balancing act of getting down the mountain quickly, maintaining traction, and maybe trying to enjoy the ride along the way.
            </div>
            <img class="blog-img" src="./img/IMG_3089.jpg">
            <div class="blog-p">
                The bottom seemed to be an entirely different region. It was brighter, warmer, drier. We began our ascent up the notorious Blackhorse gap (Camp Bethel Side).
            </div>
            <img class="blog-img" src="./img/IMG_3796.jpg">
            <div class="blog-p">
                After marking another notch in the Blackhorse ascents section of my frame we were greeted with the same dreary, cold, climate as before, yet it felt better this time. The Blue Ridge Parkway truly is stunning, no matter what season or horse you're riding.
            </div>
        </div>
    </blog-post>
</template>

<script>
    import BlogPost from '../BlogPost.vue'
    import posts from '../posts'
    import IronMt from './img/IMG_3794.jpg'
    import meta from '../../../metas'

    const post = posts[4]

    export default {
      name: 'spec-mines-oct-29-2017',
      components: {
        BlogPost
      },
      metaInfo: meta['/spec-mines-oct-29-2017'],
      data() {
        return {
          headerHeight: 800,
          image: IronMt,
          post: post
        }
      }
    }
</script>

<style>

</style>
