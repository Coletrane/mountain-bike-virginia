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
      <a :href="author.fbUrl"
         class="fb-social-action">
        <font-awesome-icon :icon="faFacebook"/>
      </a>
      <a v-if="author.stravaUrl"
         :href="author.stravaUrl"
         class="strava-icon">
        <font-awesome-icon :icon="faStrava"/>
      </a>
    </div>
  </div>
</template>
<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook"
import faStrava from "@fortawesome/fontawesome-free-brands/faStrava"

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
<style>
.strava-icon {
  color: #fc4c02 !important;
}
</style>
<style scoped>
.author-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

a {
  text-decoration: underline;
  background: transparent;
}

a:hover {
  background: none;
}
</style>
