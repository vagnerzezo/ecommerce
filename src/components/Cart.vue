<!-- cart.vue -->
<template>
  <div id="cart-product">
    <div class="cart">
      <div class="cart-topo">
        <span>Cart</span>
        <span>close</span>
      </div>
    </div>
    <div class="cart-content" v-for="product in cart" :key="product.id">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="information">
        <div class="name">{{ product.title }}</div>
        <div class="price">R$ {{ formatPrice(product.price) }}</div>
      </div>
      <button @click="removeFromCart(product.id)">X</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Carrinho",
  computed: {
    ...mapGetters(["cartProducts"]),
    cart() {
      return this.cartProducts;
    },
  },
  methods: {
    ...mapActions(["removeProductFromCart"]),
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    removeFromCart(productId) {
      this.removeProductFromCart(productId);
    },
  },
};
</script>

<style lang="css" scoped>
/* Seu estilo aqui */
</style>
