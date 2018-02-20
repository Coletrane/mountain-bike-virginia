<template>
  <div class="card-container">
    <div class="mtbva-card"
         :style="postCardStyle">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
  import {boxShadow} from "../../assets/styles"

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
  .mtbva-card {
    background-color: rgba(0, 0, 0, .55);
  }
</style>
