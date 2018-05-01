<template>
  <blog-post :image="img + post.imgRoute"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <div class="blog-p">
        This track worked you from start to finish don't let the Gopro fool you. It wasn't a burner but she was steady.
        Stay tuned for the full weekend mash up. Go <a href="https://downhillsoutheast.com/results">here to view the
        results</a> from this epic weekend. Check out my clothing line <a href="https://viralstyle.com/store/angelo-wash/Sketchcollect">Sketch Collect Urban MTB Co.</a>
      </div>
      <div>
      <youtube :src="post.ytSrc"/>
      </div>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../../components/BlogPost'
  import Youtube from '../../components/Iframes/Youtube'

  import blogPost from '../../assets/mixins/blog-post'

  export default {
    name: 'downhill-southeast-angelo-wash',
    components: {
      BlogPost,
      Youtube
    },
    mixins: [
      blogPost
    ]
  }
</script>
