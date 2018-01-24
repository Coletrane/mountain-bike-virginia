<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Position</th>
        <th scope="col">Name</th>
        <th scope="col">Time</th>
      </tr>
    </thead>
    <tbody>
      <span v-for="(item, i) in items">
      <th scope="row">{{i + 1}}</th>
        <td>item.name</td>
        <td>item.time</td>
      </span>
    </tbody>
  </table>
</template>

<script>

  export default {
    name: "class-table",
    props: {
      items: {
        required: true,
        type: Object
      }
    }
  }
  </script>

<style>

  </style>
