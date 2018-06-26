<template>
  <blog-post :image="img + image"
             :post="post"
             :related-posts="relatedPosts">
    <div slot="content">
      <p>
        {{post.description}}
      </p>
      <div class="blog-p">
        <payment-methods product="Dragon's Back T-Shirt"
                         :amount="18"
                         class="pay-methods"/>
      </div>
      <blog-image :src="img + post.imgRoute"/>
    </div>
  </blog-post>
</template>
<script>
  import BlogPost from '@/components/BlogPost'
  import BlogImage from '@/components/Images/BlogImage'
  import PaymentMethods from '@/components/Images/PaymentMethods'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
  import faMobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt'

  import blogPost from '@/assets/mixins/blog-post'

  export default {
    name: 'dragons-back-tshirt',
    components: {
      BlogImage,
      BlogPost,
      PaymentMethods,
      FontAwesomeIcon
    },
    mixins: [
      blogPost
    ],
    data() {
      return {
        faEnvelope,
        faMobileAlt
      }
    },
    computed: {
      image() {
        if (process.browser && document.body.clientWidth < 1100) {
          return 'dragons-back-tshirt-back-only.jpg'
        } else {
          return this.post.imgRoute
        }
      }
    }
  }
</script>
<style scoped>
  @media (min-width: 1400px) {
    .pay-methods {
      margin-top: 2.5rem;
    }
  }
</style>
