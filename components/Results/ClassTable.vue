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
      <tr v-for="(item, i) in items">
        <th scope="row">{{i + 1}}</th>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "class-table",
  props: {
    items: {
      required: true,
      type: Array
    }
  }
}
</script>
<style scoped>
thead {
  display: table-column;
}

th,
td {
  border: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 33%;
}

tr:hover,
tr:active {
  border-bottom: 1px solid black;
}
</style>
