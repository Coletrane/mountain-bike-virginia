<template>
  <div class="quote-wrapper">
    <div class="quote">
      <font-awesome-icon :icon="faQuoteLeft"
                         class="left-quote"/>
      <span class="quote-text">
        <i><strong>
          <span v-html="quote"></span>
        </strong></i>
      </span>

      <font-awesome-icon :icon="faQuoteRight"
                         class="right-quote"/>
    </div>
    <p v-if="person"
       class="caption quote-person">
      - {{ person }}
    </p>
  </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import faQuoteLeft from "@fortawesome/fontawesome-free-solid/faQuoteLeft"
import faQuoteRight from "@fortawesome/fontawesome-free-solid/faQuoteRight"

export default {
  name: "quote",
  props: {
    quote: {
      type: String,
      required: true
    },
    person: {
      type: String,
      required: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faQuoteLeft: faQuoteLeft,
      faQuoteRight: faQuoteRight
    }
  }
}
</script>

<style scoped>
.quote-wrapper {
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: auto;
}
.quote {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: center;
}
svg {
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.quote-person {
  text-align: center;
  font-size: 1.2rem;
}
@media (max-width: 550px) {
  .quote {
    font-size: 1.5rem;
  }
  svg {
    font-size: 1rem;
  }
  .quote-person {
    font-size: 0.8rem;
  }
}
.left-quote {
  margin-right: 0;
  flex: 0 1 auto;
  align-self: flex-start;
}
.quote-text {
  flex: 1 1 auto;
  align-self: center;
}
.right-quote {
  margin-left: 0;
  flex: 0 1 auto;
  align-self: flex-end;
}
</style>
