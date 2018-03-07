<template>
  <div class="author-container">
    <div>
    <a :href="author.fbUrl">
      <img class="author-pic"
           :src=author.imgUrl
           :alt="author.name">
      <div class="name-container">
        <span class="name">
        {{author.name}}
        </span>
      </div>
    </a>
    </div>
    <div class="social-icons">
      <a :href="author.fbUrl">
        <font-awesome-icon :icon="faFacebook"/>
      </a>
      <a v-if="author.stravaUrl"
         :href="author.stravaUrl">
        <font-awesome-icon :icon="faStrava"/>
      </a>
    </div>
  </div>
</template>
<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  import faStrava from '@fortawesome/fontawesome-free-brands/faStrava'

  export default {
    name: "author",
    props: {
      author: {
        type: Object,
        required: true
      },
      inline: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        faFacebook: faFacebook,
        faStrava: faStrava
      }
    }
  }
</script>
<style scoped>
  .author-container {
    width: 40%;
    text-align: center;
    padding-top: 1.5rem;
    max-width: 180px;
    float: left;
  }

  .author-pic {
    border-radius: 50%;
    width: 50%;
  }

  .social-icons {
    text-align: center;
    font-size: 2rem;
  }
  .social-icons a {
    padding-left: .5rem;
    padding-right: .5rem;
  }

</style>
