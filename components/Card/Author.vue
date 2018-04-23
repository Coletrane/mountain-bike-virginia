<template>
  <div class="author-container">
    <div>
      <img class="author-pic"
           :src=author.imgUrl
           :alt="author.name">
      <div>
        <a :href="author.fbUrl">
          {{author.name}}
        </a>
      </div>
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
    name: 'author',
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
    padding-top: 1.5rem;
    width: 40%;
    text-align: center;
    max-width: 180px;
    float: left;
  }

  .author-pic {
    border-radius: 50%;
    width: 50%;
  }

  svg {
    text-align: center;
    font-size: 2rem;
    margin-top: .5rem;
    margin-left: .5rem;
    margin-right: .5rem;
  }

  a {
    text-decoration: underline;
    color: black;
    background: transparent;
  }
</style>
