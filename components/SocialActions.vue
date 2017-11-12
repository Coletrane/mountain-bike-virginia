<template>
  <div class="social">
    <v-btn icon class="blue--text text--darken-4 social-button"
           :href="facebookLink">
      <v-icon medium>fa-facebook</v-icon>
    </v-btn>
    <v-btn icon class="red--text social-button"
           :href="redditLink">
      <v-icon medium>fa-reddit</v-icon>
    </v-btn>
    <v-btn icon class="light-blue--text social-button"
           :href="twitterLink">
      <v-icon medium>fa-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'social-actions',
    props: ['post'],
    computed: {
      facebookLink() {
        return "http://www.facebook.com/share.php?u=" +
          process.env.baseUrl + '/' + this.post.route
      },
      redditLink() {
        return "http://www.reddit.com/submit?url=" +
          process.env.baseUrl + '/' + this.post.route
      },
      twitterLink() {
        return "http://twitter.com/home?status=" +
          this.post.title + " " +
          this.baseUrl + '/' + this.post.route
      }
    },
  }
  </script>

<style>
  @media screen and (max-width: 600px) {
    .social-button {
      margin: 0 !important;
      width: 2rem !important;
    }
    .icon {
      font-size: 1.5rem !important;
    }

  }
  .social {
    margin-top: -.5rem;
  }
</style>
