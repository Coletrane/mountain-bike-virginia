<template>
  <div class="social">
    <span>
      <a :href="facebookLink">
        <i class="fa fa-facebook"
           aria-hidden="true"></i>
      </a>
    </span>
    <span>
      <a :href="redditLink">
        <i class="fa fa-reddit"
           aria-hidden="true"></i>
      </a>
    </span>
    <span style="padding-left: .5rem;">
      <a :href="twitterLink">
        <i class="fa fa-twitter"
           aria-hidden="true"></i>
      </a>
    </span>
  </div>
</template>
<script>
  export default {
    name: "social-actions",
    props: {
      post: {
        required: true
      }
    },
    computed: {
      facebookLink() {
        return "http://www.facebook.com/share.php?u=" +
          process.env.baseUrl + "/" + this.post.route
      },
      redditLink() {
        return "http://www.reddit.com/submit?url=" +
          process.env.baseUrl + "/" + this.post.route
      },
      twitterLink() {
        return "http://twitter.com/home?status=" +
          this.post.title + " " +
          this.baseUrl + "/" + this.post.route
      }
    }
  }
</script>
<style scoped>
  span {
    padding: 1rem;
  }

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
