<template>
  <div>
    <blog-post :header-height="700"
               :image="post.img"
               :post="post"
               no-title
               :no-post-title="false"
               :related-posts="relatedPosts">

      <div slot="content">
        <div class="blog-promo">
          Come one, come all, to the best gravel, trail, bikepacking, endurance, 270 miles on two wheels. Travel
          between two of the most legendary cycling towns in the country, Harrisonburg and Roanoke. Ride as a team
          or solo (SPOT tracker required) and try to complete the 270, a feat yet to be accomplished.<a
          href="http://roanokemountainadventures.com/"> Roanoke Mountain Adventures</a> will be providing shuttles
          to and from both Harrisonburg and Roanoke. <a href="http://roanokemountainadventures.com/">Rate$ for
          shuttles.</a>
          <div>
            <a href="http://tinyurl.com/rockstargooglemap">Route options (TRAIL or GRAVEL)</a>
          </div>
          <div>
            <a :href="post.fbEvent">
              Event Page
              <font-awesome-icon :icon="faFacebook"
                                 class="inline-facebook-icon"/>
            </a>
          </div>
        </div>
        <ride-with-gps :url="post.rwGps"/>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import {posts} from '../assets/posts'
  import {headTags} from '../assets/functions'
  import {home} from '../assets/head-tags'

  import BlogPost from '../components/BlogPost'
  import ImageLink from '../components/Images/ImageLink'
  import RideWithGps from '../components/Iframes/RideWithGps'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  const post = posts.rockstarVa2018

  export default {
    name: 'rockstar-va-2018',
    components: {
      RideWithGps,
      ImageLink,
      BlogPost,
      FontAwesomeIcon
    },
    head() {
      return headTags(
        'RockStar VA',
        post.subtitle,
        home.keywords,
        post
      )
    },
    data() {
      return {
        post: post,
        faFacebook: faFacebook,
        relatedPosts: [
          posts.middleMtMomma2018,
          posts.creature2017Recap
        ]
      }
    }
  }
</script>
