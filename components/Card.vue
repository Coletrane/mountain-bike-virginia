<template>
  <div class="card-container">
    <div class="card"
         :style="postCardStyle">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
  import {boxShadow} from "../assets/styles"

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
  .card {
    background-color: rgba(255, 255, 255, .85);
  }
</style>
