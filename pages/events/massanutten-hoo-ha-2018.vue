<template>
  <blog-post :image="img + 'hoo-ha.jpg'"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '../../components/BlogPost'
  import BlogImage from '../../components/Images/BlogImage'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faBicycle from '@fortawesome/fontawesome-free-solid/faBicycle'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

  import blogPost from '../../assets/mixins/blog-post'

  export default {
    name: 'massanutten-hoo-ha-2018',
    components: {
      BlogPost,
      BlogImage,
      FontAwesomeIcon
    },
    mixins: [
      blogPost
    ],
    data() {
      return {
        faBicycle: faBicycle,
        faFacebook: faFacebook
      }
    }
  }
</script>