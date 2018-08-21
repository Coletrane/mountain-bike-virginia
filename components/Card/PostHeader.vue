<template>
  <div class="post-card-header">
    <nuxt-link v-if="postRoute"
               :to="{name: postRouteName}">
      <h2 v-if="post.title"
          class="headline
                 link-hover">
        {{post.title.toUpperCase()}}
      </h2>
    </nuxt-link>
    <div v-else-if="post.link">
      <a :href="post.link">
        <h2 v-if="post.title"
            class="headline
                link-hover">
          {{post.title.toUpperCase()}}
        </h2>
      </a>
    </div>
    <div v-else>
      <h2 v-if="post.title"
          class="headline
                link-hover">
        {{post.title.toUpperCase()}}
      </h2>
    </div>
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
</template>
<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faCalendarAlt from "@fortawesome/fontawesome-free-solid/faCalendarAlt"
import faLocationArrow from "@fortawesome/fontawesome-free-solid/faLocationArrow"

import postRoute from "../../mixins/post-route"

export default {
  name: "post-header",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  },
  mixins: [postRoute],
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
  padding-top: 0.5rem;
}

a {
  text-decoration: none;
  color: black;
}

h2 {
  text-decoration: underline;
  font-weight: 800;
}

h3 {
  font-size: 1.7rem;
  font-family: "lato", sans-serif;
  font-style: italic;
}

h4 {
  font-size: 1.2rem;
  font-family: "lato", sans-serif;
}
@media (max-width: 575px) {
  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
@media (max-width: 350px) {
  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }

}

svg {
  margin-right: 0.5rem;
}
</style>
