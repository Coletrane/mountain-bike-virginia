<template>
  <div class="post-card-header">
    <nuxt-link v-if="postRoute"
               :to="{name: post.route}">
      <h2 v-if="post.title"
          class="headline">{{post.title.toUpperCase()}}
      </h2>
      <h3 v-if="post.subtitle"
          class="subheading">
        {{post.subtitle}}
      </h3>
      <h4 v-if="post.date">
        <font-awesome-icon :icon="faCalendarAlt"/>
        {{post.date}}
      </h4>
      <h4 v-if="post.loc">
        <font-awesome-icon :icon="faLocationArrow"/>
        {{post.loc}}
      </h4>
    </nuxt-link>
    <div v-else>
      <h2 v-if="post.title"
          class="headline">{{post.title.toUpperCase()}}
      </h2>
      <h3 v-if="post.subtitle"
          class="subheading">
        {{post.subtitle}}
      </h3>
      <h4 v-if="post.date">
        <font-awesome-icon :icon="faCalendarAlt"/>
        {{post.date}}
      </h4>
      <h4 v-if="post.loc">
        <font-awesome-icon :icon="faLocationArrow"/>
        {{post.loc}}
      </h4>
    </div>
  </div>
</template>
<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faCalendarAlt from '@fortawesome/fontawesome-free-solid/faCalendarAlt'
  import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow'

  import postRoute from '../../assets/mixins/post-route'

  export default {
    name: 'post-header',
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    components: {
      FontAwesomeIcon
    },
    mixins: [
      postRoute
    ],
    data() {
      return {
        faCalendarAlt: faCalendarAlt,
        faLocationArrow: faLocationArrow
      }
    }
  }
</script>
<style scoped>
  .post-card-header {
    padding-top: .5rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  /*hover effect*/
  h2 {
    background-image: linear-gradient(rgba(115, 166, 52,0.5) 0%, rgba(115, 166, 52,0.5) 100%);
    background-repeat: repeat-y;
    background-size: 0% 0em;
    background-position: 0 65%;
    transition: 600ms ease;
  }
  h2:hover {
    background-image: linear-gradient(#73a533 0%, #73a533 100%);
    background-size: 100% 1em;
  }
  h2 {
    text-decoration: underline;
    font-weight: 800;

  }

  h3 {
    font-size: 1.5rem;
    font-family: 'lato', sans-serif;
    font-style: italic;
  }

  h4 {
    font-size: 1.2rem;
    font-family: 'lato', sans-serif;
  }

  svg {
    margin-right: .5rem;
  }
</style>
