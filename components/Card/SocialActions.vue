<template>
  <div class="social">
    <a :href="facebookLink">
      <i class="fa fa-facebook"
         aria-hidden="true"></i>
    </a>
    <a :href="redditLink">
      <i class="fa fa-reddit"
         aria-hidden="true"></i>
    </a>
    <a :href="twitterLink">
      <i class="fa fa-twitter"
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
    color: transparent;
  }

  i {
    font-size: 2rem;
  }

  i.fa-facebook {
    color: #3B5998;
  }

  i.fa-reddit {
    color: #FF5700;
  }

  i.fa-twitter {
    color: #1DA1F2;
  }
</style>
