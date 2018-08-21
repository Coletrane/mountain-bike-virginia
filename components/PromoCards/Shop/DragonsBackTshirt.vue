<template>
  <post-card :post="post">
    <div slot="media">
      <image-link :post="post"/>
    </div>
    <div slot="words">
      <div class="promo">
        <p>
          {{post.description}}
        </p>
        <div class="blog-p">
          <payment-methods product="Dragon's Back T-Shirt"
                           :amount="18"
                           class="pay-methods"/>
        </div>
      </div>
    </div>
  </post-card>
</template>
<script>
import PostCard from "../../Card/PostCard"
import ImageLink from "../../Images/ImageLink"
import PaymentMethods from "../../Images/PaymentMethods"

import promoCard from "../../../mixins/promo-card"

export default {
  name: "shop-dragons-back-tshirt-promo",
  components: {
    PostCard,
    ImageLink,
    PaymentMethods
  },
  mixins: [promoCard]
}
</script>
