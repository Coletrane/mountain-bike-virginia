<template>
  <div class="payment-container">
    <div v-for="paymentMethod of paymentMethods"
         class="payment-method">
      <a :href="paymentMethod.link">
        <img :src="s3Payments + paymentMethod.icon"
             :class="paymentMethod.icon.split('.')[0]">
      </a>
    </div>
  </div>
</template>
<script>
import { s3StaticImg } from "../../scripts/routes"

export default {
  name: "payment-methods",
  props: {
    product: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      s3Payments: `${s3StaticImg}/payment-methods/`,
      paymentMethods: [
        {
          icon: "apple-pay.png",
          link: `sms://+15405291426?body=${encodeURIComponent(this.product)} $${
            this.amount
          }`
        },
        {
          icon: "paypal.png",
          link: `paypal.me/coleinman/${this.amount}`
        },
        {
          icon: "venmo.png",
          link: `https://venmo.com/Cole-Inman-1/${this.amount}`
        },
        {
          icon: "square.png",
          link: `cash.me/$ColeInman/${this.amount}`
        }
      ]
    }
  }
}
</script>
<style scoped>
.payment-container {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.payment-method {
  flex: 1 1 auto;
  padding: 1rem;
}

a {
  background: none;
}

a:hover {
  background: none;
}

img {
  width: 6rem;
}

.apple-pay {
  width: 4rem;
}

.paypal,
.venmo {
  padding-top: 0.5rem;
}

.square {
  padding-top: 0.25rem;
}
</style>
