<template>
  <div>
    <blog-post :image="img + post.imgRoute"
               :post="post"
               header-author>
      <div slot="content">
        <div>
          <blog-image :src="img + 'fence.jpg'"/>
          <div class="blog-p">
            The view of Carvins Cove’s backside from Hollins University. Outdoor Trails, a terrific outdoor store in
            Daleville and Lynchburg, sponsored the free Saturday camping along with Hollins.
          </div>
          <blog-image :src="img + 'woods-creature.jpg'"/>
          <div class="blog-p">
            The Woods Family are staunch supporters of all types of cycling in the Roanoke region. Virginia’s Blue Ridge
            Creature From Carvins Cove is fortunate to be able to use the Woods Family Heating and AC parking lot for
            post-race awards, and the Parkway Brewing Parking Lot Pub, with Get Bent IPA on hand to benefit Roanoke’s
            highly active IMBA chapter.
          </div>
          <blog-image :src="img + 'parkinglotpub.jpg'"/>
          <div class="blog-p">
            The Parkway Parking Lot Pub is ready to serve thirsty 44 mile racers!
          </div>
          <blog-image :src="img + 'uptosomethin.jpg'"/>
          <div class="blog-p">
            Amazing ride by #1 son Cole, his longest on any bike. 44 miles registered where it matters…Strava!
          </div>
          <blog-image :src="img + 'gather.jpg'"/>
          <div class="blog-p">
            Awesome weather for mountain bikers to gather.
          </div>
          <blog-image :src="img + 'future.jpg'"/>
          <div class="blog-p">
            Future Creatures!
          </div>
        </div>
        <blog-image :src="img + 'singlespeeds.jpg'"/>
        <div class="blog-p">
          Harrisonburg’s Scottie Pendleton, singlespeed winner, was taller than our photographer could handle. But he
          won the singlespeed regardless, on his first ever ride at Carvins Cove. Tommy Oravetz, runner up.
        </div>
        <blog-image :src="img + 'opens.jpg'"/>
        <div class="blog-p">
          Open class winner Roanoke’s Andrew Dunlap, center, had the ride of his year. Robbie Bruce 2nd (right) and
          Jeff Glenn.
        </div>
        <blog-image :src="img + 'womens.jpg'"/>
        <div class="blog-p">
          Women’s full podium. Roanoke’s 17 year old sensation Anna Sortore victorious (center) in likely her first
          ever 40+ mile ride. Susannah Cadawalder 2nd (right), Becku Barkett 3rd.
        </div>
        <blog-image :src="img + 'masters.jpg'"/>
        <div class="blog-p">
          Masters aged 45-54. First, Acie Hylton (center), Roanoker Wake Fulp 2nd, Chris Pohowsky from Blacksburg 3rd.
        </div>
        <blog-image :src="img + 'veterans.jpg'"/>
        <div class="blog-p">
          The man with the most amazing variety of Strava ride locales, nationwide mountain biking trucker David
          Lachniet locked up the new Master 55+ competition.
        </div>
        <blog-image :src="img + 'laura.jpg'"/>
        <div class="blog-p">
          Laura Hamm is amazing, and she rides with only one gear. Check her time in results to see just how so. First
          ever singlespeed woman in the XXC-VA Series.
        </div>
        <blog-image :src="img + 'xxcva-champs.jpg'"/>
        <div class="blog-p">
          Adam Stephens of Fayetteville, WV, wins the XXC-VA open title and Champion’s jersey, flanked by runner up
          Andrew Dunlap. Adam raced all 5 series events that took place in 2 different Virginias, and throughout the
          Blue Ridge and Shenandoah Valley.
        </div>
        <blog-image :src="img + 'feelingit.jpg'"/>
        <div class="blog-p">
          Adam Stephens feeling it!
        </div>
        <blog-image :src="img + 'scottie-champ.jpg'"/>
        <div class="blog-p">
          Scottie Pendleton modeling the champion’s jersey of the singlespeed XXC-VA Series!
        </div>
        <blog-image :src="img + 'wake-champ.jpg'"/>
        <div class="blog-p">
          Wake Fulp repeats! The first 2-time XXC-VA Champion, Master 45+. Wake faced much tougher competition this
          year and came out a better rider as a result.
        </div>
        <blog-image :src="img + 'truckyeah.jpg'"/>
        <div class="blog-p">
          Long haul mountain biker David Lachniet’s new custom bike shop on wheels.
        </div>
        <blog-image :src="img + 'oneoff.jpg'"/>
        <div class="blog-p">
          One-off bike rack system.
        </div>
        <blog-image :src="img + 'woods-sign.jpg'"/>
        <div class="blog-p">
          Many thanks to Woods Family HVAC. We’ll see you again next year!
        </div>
        <youtube :src="post.youtube"/>
      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogPost from '../components/BlogPost.vue'
  import Youtube from '../components/Iframes/Youtube.vue'
  import BlogImage from '../components/Images/BlogImage.vue'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'creature-2017-recap',
    components: {
      BlogPost,
      Youtube,
      BlogImage
    },
    mixins: [
      blogPost
    ]
  }
</script>

