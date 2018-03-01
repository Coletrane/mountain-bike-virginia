<template>
  <div class="social">
    <a :href="facebookLink"
        class="fb-social-action">
      <font-awesome-icon :icon="faFacebook"/>
    </a>
    <a :href="redditLink"
        class="reddit-social-action">
      <font-awesome-icon :icon="faReddit"/>
    </a>
    <a :href="twitterLink"
       class="twitter-social-action">
      <font-awesome-icon :icon="faTwitter"/>
    </a>
  </div>
</template>
<script>
  import {baseUrl} from '../../scripts/routes'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
  import faReddit from '@fortawesome/fontawesome-free-brands/faReddit'
  import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'

  export default {
    name: "social-actions",
    props: {
      post: {
        required: true
      }
    },
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        faFacebook: faFacebook,
        faReddit: faReddit,
        faTwitter: faTwitter
      }
    },
    computed: {
      facebookLink() {
        return `http://www.facebook.com/share.php?u=${baseUrl}/${this.url}`
      },
      redditLink() {
        return `http://www.reddit.com/submit?url=${baseUrl}/${this.url}`
      },
      twitterLink() {
        return `http://twitter.com/home?status=${this.post.title} ${baseUrl}/${this.url}`
      },
      url() {
        if (this.post.route && !this.post.route.includes('facebook')) {
          return this.post.route
        } else {
          return ""
        }
      }
    }
  }
</script>

<style scoped>

  a {
    font-size: 2rem;
  }

  a.fb-social-action {
    color: #3B5998;
    padding-right: 1rem;
  }
  @media (max-width: 692px) {
    .fa-facebook {
      margin-right: 4px;
    }
  }

  a.reddit-social-action {
    color: #FF5700;
  }

  a.twitter-social-action {
    color: #1DA1F2;
    padding-left: 1rem;
  }
</style>
