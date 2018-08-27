<template>
  <div :class="nthChildClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tiles",
  props: {
    nthChild: {
      type: Number,
      required: true
    }
  },
  computed: {
    nthChildClass() {
      if (this.nthChild <= 3) {
        return "three"
      } else if (this.nthChild === 4) {
        return "four"
      } else if (this.nthChild === 5) {
        return "five"
      } else if (this.nthChild === 6) {
        return "six"
      } else if (this.nthChild === 7) {
        return "seven"
      } else if (this.nthChild === 8) {
        return "eight"
      } else if (this.nthChild >= 9) {
        return "nine"
      }
    }
  }
}
</script>
<style scoped>
.tile-override {
  width: 100% !important;
}
.tile-override + img {
  width: 100% !important;
}
.three img:nth-child(3n),
.three img:nth-child(3n) + img {
  width: 50%;
}

.four img:nth-child(4n),
.four img:nth-child(4n) + img {
  width: 50%;
}

.five img:nth-child(5n),
.five img:nth-child(5n) + img {
  width: 50%;
}

.six img:nth-child(6n),
.six img:nth-child(6n) + img {
  width: 50%;
}

.seven img:nth-child(7n),
.seven img:nth-child(7n) + img {
  width: 50%;
}

.eight img:nth-child(8n),
.eight img:nth-child(8n) + img {
  width: 50%;
}

.nine img:nth-child(9n) + .nine img:nth-child(9n) + img {
  width: 50%;
}
</style>
