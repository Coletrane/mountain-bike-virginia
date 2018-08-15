<template>
  <div class="select">
    <select v-model="selectedItem">
      <option v-for="item in items"
              :value="item"
              :selected="selectedItem.route === item.route">
        {{item.name}}
      </option>
    </select>
    <span class="select-highlight"></span>
    <span class="select-bar"></span>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  props: {
    initialItem: {
      required: true,
      type: Object
    },
    items: {
      required: true,
      type: Array
    },
    vuexAction: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      selectedItem: this.initialItem
    }
  },
  mounted() {
    // This is a hack to get the item.name to show on initial page load
    if (process.browser) {
      const itemIndex = this.items.findIndex(item => {
        return item.route === this.selectedItem.route
      })
      this.$el.getElementsByTagName("select")[0].selectedIndex = itemIndex
    }
  },
  watch: {
    selectedItem() {
      this.$store.dispatch(this.vuexAction, this.selectedItem.route)
    }
  }
}
</script>
<style scoped>
.select {
  position: relative;
  width: 350px;
}

select {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 350px;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

select:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}

.select select {
  appearance: none;
}

.select:after {
  position: absolute;
  top: 18px;
  right: 10px;
  /* Styling the down arrow */
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgb(0, 0, 0);
  pointer-events: none;
}

@media (max-width: 350px) {
  select,
  .select {
    width: 295px;
  }
}

.select-bar {
  position: relative;
  display: block;
  width: 350px;
  height: 3px;
  color: black;
}

.select-bar:before,
.select-bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #3d7635;
  transition: 0.2s ease all;
}

.select-bar:before {
  left: 50%;
}

.select-bar:after {
  right: 50%;
}

/* active state */
select:focus ~ .select-bar:before,
select:focus ~ .select-bar:after {
  width: 50%;
}

.select-highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
</style>
