<template>
  <div>
    <v-btn icon class="blue--text text--darken-4"
           :href="facebookLink(post.href)">
      <v-icon medium>fa-facebook</v-icon>
    </v-btn>
    <v-btn icon class="red--text"
           :href="redditLink(post.href)">
      <v-icon medium>fa-reddit</v-icon>
    </v-btn>
    <v-btn icon class="light-blue--text"
           :href="twitterLink(post)">
      <v-icon medium>fa-twitter</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'social-actions',
    props: ['post'],
    data() {
      return {
        baseUrl: "http://bikeva.com/"
      }
    },
    methods: {
      facebookLink(post) {
        return "http://www.facebook.com/share.php?u=" +
          this.baseUrl + post.href
      },
      redditLink(post) {
        return "http://www.reddit.com/submit?url=" +
          this.baseUrl + post.href
      },
      twitterLink(post) {
        return "http://twitter.com/home?status=" +
          post.title + " " +
          this.baseUrl + post.href
      }
    }
  }
  </script>