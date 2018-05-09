<template>
  <div>
    <blog-post :image="img + post.ogImage"
               :post="post"
               :related-posts="relatedPosts">
      <div slot="content">
        <ride-with-gps-switcher :gps-routes="[
            {
              name: 'youth',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285133&sampleGraph=true'
            },
            {
              name: 'beginner',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=27285230&sampleGraph=true'
            },
            {
              name: 'xc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=4047388&sampleGraph=true'
            },
            {
              name: 'xxc',
              url: 'https://rwgps-embeds.com/embeds?type=route&id=26778887&sampleGraph=true'
            }
          ]"/>
        <blog-image :src="img + 'P1010061.jpg'"/>
        <blog-image :src="img + 'P1010065.jpg'"/>
        <blog-image :src="img + 'P1010076.jpg'"/>
        <blog-image :src="img + 'P1010106.jpg'"/>
        <quote quote="We were the eye of the storm"/>
        <blog-image :src="img + 'P1010110.jpg'"/>
        <blog-image :src="img + 'P1010115.jpg'"/>
        <blog-image :src="img + 'P1010122.jpg'"/>
        <blog-image :src="img + 'P1010128.jpg'"/>
        <blog-image :src="img + 'P1010130.jpg'"/>
        <blog-image :src="img + 'P1010132.jpg'"/>
        <blog-image :src="img + 'P1010139.jpg'"/>
        <blog-image :src="img + 'P1010144.jpg'"/>
        <blog-image :src="img + 'P1010157.jpg'"/>
        <blog-image :src="img + 'P1010158.jpg'"/>
        <blog-image :src="img + 'P1010165.jpg'"/>
        <blog-image :src="img + 'P1010167.jpg'"/>
        <blog-image :src="img + 'P1010168.jpg'"/>
        <blog-image :src="img + 'P1010170.jpg'"/>
        <blog-image :src="img + 'P1010177.jpg'"/>
        <blog-image :src="img + 'P1010180.jpg'"/>
        <blog-image :src="img + 'P1010184.jpg'"/>
        <blog-image :src="img + 'P1010190.jpg'"/>
        <blog-image :src="img + 'P1010192.jpg'"/>
        <blog-image :src="img + 'P1010296.jpg'"/>
        <blog-image :src="img + 'P1010302.jpg'"/>
        <blog-image :src="img + 'P1010304.jpg'"/>
        <blog-image :src="img + 'P1010310.jpg'"/>
        <blog-image :src="img + 'P1010315.jpg'"/>
        <blog-image :src="img + 'P1010316.jpg'"/>
        <blog-image :src="img + 'P1010323.jpg'"/>
        <div class="blog-p caption">
          Chris Pohowsky rips it off Middle Mountain into Salt Stump
        </div>
        <blog-image :src="img + 'P1010337.jpg'"/>
        <blog-image :src="img + 'P1010345.jpg'"/>
        <blog-image :src="img + 'P1010350.jpg'"/>
        <blog-image :src="img + 'P1010358.jpg'"/>
        <blog-image :src="img + 'P1010369.jpg'"/>
        <blog-image :src="img + 'P1010391.jpg'"/>
        <blog-image :src="img + 'P1010399.jpg'"/>
        <blog-image :src="img + 'P1010413.jpg'"/>
        <blog-image :src="img + 'P1010416.jpg'"/>
        <blog-image :src="img + 'P1010420.jpg'"/>
        <blog-image :src="img + 'P1010424.jpg'"/>
        <blog-image :src="img + 'P1010427.jpg'"/>
        <blog-image :src="img + 'P1010431.jpg'"/>
        <blog-image :src="img + 'P1010440.jpg'"/>
        <blog-image :src="img + 'P1010445.jpg'"/>
        <blog-image :src="img + 'P1010448.jpg'"/>
        <blog-image :src="img + 'P1010453.jpg'"/>
        <blog-image :src="img + 'P1010459.jpg'"/>
        <blog-image :src="img + 'P1010471.jpg'"/>
        <blog-image :src="img + 'P1010481.jpg'"/>
        <blog-image :src="img + 'P1010487.jpg'"/>
        <blog-image :src="img + 'P1010496.jpg'"/>
        <blog-image :src="img + 'P1010512.jpg'"/>
        <blog-image :src="img + 'P1010518.jpg'"/>
        <blog-image :src="img + 'P1010525.jpg'"/>
        <blog-image :src="img + 'P1010529.jpg'"/>
        <blog-image :src="img + 'P1010539.jpg'"/>
        <blog-image :src="img + 'P1010546.jpg'"/>
        <blog-image :src="img + 'P1010562.jpg'"/>
        <div class="blog-p caption">
          The legendary Dale Heath rips down the chute to the Salt Stump Switchback
        </div>
        <blog-image :src="img + 'P1010574.jpg'"/>
        <blog-image :src="img + 'P1010577.jpg'"/>
        <blog-image :src="img + 'P1010584.jpg'"/>
        <blog-image :src="img + 'P1010593.jpg'"/>
        <blog-image :src="img + 'P1010602.jpg'"/>
        <blog-image :src="img + 'P1010605.jpg'"/>
        <blog-image :src="img + 'P1010608.jpg'"/>
        <blog-image :src="img + 'P1010614.jpg'"/>
        <blog-image :src="img + 'P1010621.jpg'"/>
        <blog-image :src="img + 'P1010625.jpg'"/>
        <blog-image :src="img + 'P1010628.jpg'"/>
        <blog-image :src="img + 'P1010640.jpg'"/>
        <blog-image :src="img + 'P1010647.jpg'"/>
        <blog-image :src="img + 'P1010651.jpg'"/>
        <blog-image :src="img + 'P1010666.jpg'"/>
        <blog-image :src="img + 'P1010675.jpg'"/>
        <blog-image :src="img + 'P1010685.jpg'"/>
        <blog-image :src="img + 'P1010689.jpg'"/>
        <blog-image :src="img + 'P1010694.jpg'"/>
        <blog-image :src="img + 'P1010697.jpg'"/>
        <blog-image :src="img + 'P1010702.jpg'"/>
        <blog-image :src="img + 'P1010711.jpg'"/>
        <blog-image :src="img + 'P1010716.jpg'"/>
        <blog-image :src="img + 'P1010727.jpg'"/>
        <blog-image :src="img + 'P1010734.jpg'"/>
        <blog-image :src="img + 'P1010739.jpg'"/>
        <blog-image :src="img + 'P1010741.jpg'"/>
        <blog-image :src="img + 'P1010755.jpg'"/>
        <blog-image :src="img + 'P1010769.jpg'"/>
        <blog-image :src="img + 'P1010770.jpg'"/>
        <blog-image :src="img + 'P1010779.jpg'"/>
        <blog-image :src="img + 'P1010783.jpg'"/>
        <blog-image :src="img + 'P1010792.jpg'"/>
        <blog-image :src="img + 'P1010795.jpg'"/>
        <blog-image :src="img + 'P1010796.jpg'"/>
        <blog-image :src="img + 'P1010800.jpg'"/>
        <blog-image :src="img + 'P1010805.jpg'"/>
        <blog-image :src="img + 'P1010808.jpg'"/>
        <blog-image :src="img + 'P1010809.jpg'"/>
        <quote quote="I'll be honest, this is the longest I've ridden my bike"
               person="Lucas Weaver"/>
        <blog-image :src="img + 'P1010812.jpg'"/>
        <blog-image :src="img + 'P1010815.jpg'"/>
        <blog-image :src="img + 'P1010817.jpg'"/>
        <blog-image :src="img + 'P1010820.jpg'"/>
        <blog-image :src="img + 'P1010822.jpg'"/>
        <blog-image :src="img + 'P1010823.jpg'"/>
        <blog-image :src="img + 'P1010825.jpg'"/>
        <blog-image :src="img + 'P1010826.jpg'"/>
        <blog-image :src="img + 'P1010833.jpg'"/>
        <blog-image :src="img + 'P1010835.jpg'"/>
        <blog-image :src="img + 'P1010836.jpg'"/>
        <blog-image :src="img + 'P1010839.jpg'"/>
        <quote quote="I just started riding 4 months ago"
               person="Mike Sutherland, XXC 40 mile racer"/>
        <blog-image :src="img + 'P1010846.jpg'"/>

      </div>
    </blog-post>
  </div>
</template>
<script>
  import BlogImage from '../components/Images/BlogImage'
  import RideWithGpsSwitcher from '../components/Iframes/RideWithGpsSwitcher'
  import MTBVAVideo from '../components/Iframes/MTBVAVideo'
  import BlogPost from '../components/BlogPost'
  import Quote from '../components/Card/Quote'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import blogPost from '../assets/mixins/blog-post'

  export default {
    name: 'middle-mt-momma-2018',
    components: {
      RideWithGpsSwitcher,
      BlogPost,
      MTBVAVideo,
      BlogImage,
      FontAwesomeIcon,
      Quote
    },
    mixins: [
      blogPost
    ],
    data() {
      return {
        faFacebook: faFacebook
      }
    }
  }
</script>
<style>
  .race-classes {
    text-align: center;
  }
</style>

