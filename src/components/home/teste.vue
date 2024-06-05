<!-- CartComponent.vue -->
<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - ${{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
    <h1>Cart</h1>
    <ul>
      <li v-for="product in cart" :key="product.id">
        {{ product.title }} - ${{ product.price }}
        <button @click="removeFromCart(product.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartComponent',
  computed: {
    ...mapGetters(['allProducts', 'cartProducts']),
    products() {
      return this.allProducts;
    },
    cart() {
      return this.cartProducts;
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'addProductToCart', 'removeProductFromCart']),
    addToCart(product) {
      this.addProductToCart(product);
    },
    removeFromCart(productId) {
      this.removeProductFromCart(productId);
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>
