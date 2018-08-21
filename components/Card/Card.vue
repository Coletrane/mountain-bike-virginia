<template>
  <div class="card-container">
    <div class="mtbva-card"
         :style="postCardStyle">
      <slot name="content"/>
    </div>
  </div>
</template>
<script>
import { boxShadow } from "../../scripts/client/styles"

export default {
  name: "card",
  data() {
    return {
      postCardStyle: {
        boxShadow: boxShadow
      }
    }
  }
}
</script>
<style>
.card-container {
  padding-left: 4rem;
  padding-right: 4rem;
}

@media (min-width: 1200px) {
  .card-container {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}

@media (max-width: 750px) {
  .card-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 575px) {
  .card-container {
    padding-left: 0;
    padding-right: 0;
  }
}

.mtbva-card {
  background-color: white;
}
</style>
