<template>
  <blog-post :image="img + 'disco-wiens.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p style="padding-bottom: 1rem;">
        {{post.promo}}
      </p>
      <instagram :src="post.instagram"/>
      <blog-image :src="img + 'disco-wiens-shake.jpg'"
                  portrait/>
      <p>
        Matt Clements shakes hands with David Wiens after a hard fought victory at the Wednesday night Disco race on
        Mill Mountain. 40 Riders showed out in the rain and Wiens had ridden the famed Dody Ridge prior that day.
      </p>
      <blog-image :src="img + 'IMG_0312.jpg'"/>
      <p>
        Prior to the announcement, the waiters placed these East Coast Mountain Biking Capital of the World cups on our
        table topped off with a fine Belgian Tripel. Whoever is calling the shots on that, <strong>gets it.</strong>
      </p>
      <blog-image :src="img + 'IMG_3867.jpg'"/>
      <p>
        IMBA Executive Director David Wiens and Roanoke IMBA President Kristine McCormick. Thank you Kristine for
        everything you have done, not only in helping get the silver ride center designation, but for Roanoke IMBA and
        mountain biking as a whole.
      </p>
      <blog-image :src="img + 'IMG_3873.jpg'"/>
      <p>
        The after party at Sweet Donkey Coffee. All the usual suspects present.
      </p>
      <p>
        Check out the incredible Visit Virginia's Blue Ridge video below. <strong>Roanoke is the East Coast Mountain
        Biking Capital of the World</strong>
      </p>
      <youtube src="https://www.youtube.com/embed/fb-KMnn9qns"/>
    </div>
  </blog-post>
</template>
<script>
import BlogPost from "../../components/BlogPost"
import BlogImage from "../../components/Images/BlogImage"
import Instagram from "../../components/Iframes/Instagram"
import Youtube from "../../components/Iframes/Youtube"

import blogPost from "../../assets/mixins/blog-post"

export default {
  name: "roanoke-silver-ride-center",
  components: {
    BlogImage,
    BlogPost,
    Instagram,
    Youtube
  },
  mixins: [blogPost]
}
</script>
