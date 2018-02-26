<template>
  <div class="social">
    <a :href="facebookLink"
        class="fb-social-action">
      <i class="fab fa-facebook"
         aria-hidden="true"></i>
    </a>
    <a :href="redditLink"
        class="reddit-social-action">
      <i class="fab fa-reddit-alien"
         aria-hidden="true"></i>
    </a>
    <a :href="twitterLink"
       class="twitter-social-action">
      <i class="fab fa-twitter"
         aria-hidden="true"></i>
    </a>
  </div>
</template>
<script>
  import {baseUrl} from '../../scripts/routes'

  export default {
    name: "social-actions",
    props: {
      post: {
        required: true
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
<style>
  i {
    padding: .7rem;
  }
  </style>
<style scoped>

  a {
    font-size: 2rem;
  }

  a.fb-social-action {
    color: #3B5998;
    padding-right: .5rem;
  }

  a.reddit-social-action {
    font-size: 2.4rem;
    color: #FF5700;
  }

  a.twitter-social-action {
    color: #1DA1F2;
    padding-left: .5rem;
  }
</style>
