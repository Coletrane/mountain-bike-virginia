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
            <img class="blog-img">
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
