<template>
  <div>
    <blog-post :header-height="900"
               :image="image"
               :post="post"
               header-author
               author-separate-div
               :related-posts="relatedPosts">
      <div class="blog-p"
           slot="header">
        Rock and Roll is dead, but machine learning isn't. On a wild hair to see what the music industry is actually like, I've turned my back on it. I suppose it helps that I have a sweet gig as a programmer at a hip company with cutting edge technology. Packing up and moving there knowing nobody, I found myself in Nashville, on <strong><i>two wheels.</i></strong> Bikes take you places, bikes take you to great people. With moving back to the Mountain/Road/Gravel/CX Mecca that is Roanoke, Virginia, I'm glad to say I will be going "low car" lifestyle, meaning I will use internal combustion transportation only when absolutely necessary, and certainly not every day. I'm coming back to roanoke <strong>with the sole purpose of creating content for this website and furthering the XXC-VA Series races.</strong> I'm incredibly lucky to get to enjoy 2 of my passions, biking, and coding, in this great town. Goodbye, Nashville.
      </div>
      <div slot="content">
        <youtube :src="post.ytSrc"/>
      </div>
    </blog-post>
  </div>
</template>

<script>
  import BlogPost from '../components/BlogPost'
  import Youtube from '../components/Iframes/Youtube'

  import {s3Pages, ravenwoodRide} from '../scripts/routes'
  import {posts} from '../assets/posts'
  import {headTags, buildVideo} from '../assets/functions'

  const post = posts.ravenwoodRide

  export default {
    name: 'ravenwood-ride',
    components: {
      BlogPost,
      Youtube
    },
    async asyncData(context) {
      return {
        schema: await buildVideo(post)
      }
    },
    head() {
      let head = {
        ...headTags(
          post.title,
          "Road Bike Ride on Ravenwood Abbandoned Golf Course connected to Shelby Bottoms Greenway in East Nashville, Tennessee",
          'road, bike, greenway, nashville, ride, cycling, velo, canyon, golf course, riding',
          post
        )
      }
      if (this.chema) {
        head.script = this.schema
      }
      return head
    },
    data() {
      return {
        image: `${s3Pages}${ravenwoodRide}/canyon-ravenwood.jpg`,
        post: post,
        relatedPosts: [
          posts.gravelocity2017Video,
          posts.gravelocity2018
        ]
      }
    }
  }
</script>
