<!-- cart.vue -->
<template>
  <div id="cart-product">
    <div class="cart">
      <div class="cart-topo">
        <span>Carrinho</span>
        <button @click="closeCart()" aria-label="Carrinho">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
            data-v-3e6ad914="" data-v-eb5ad508="">
            <path
              d="M10.9167 21.0554C16.4167 21.0724 20.9306 16.5863 20.9476 11.0863C20.9645 5.58638 16.4784 1.07251 10.9785 1.05553C5.47849 1.03855 0.964624 5.52464 0.947646 11.0246C0.930668 16.5246 5.41676 21.0385 10.9167 21.0554Z"
              stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-3e6ad914=""
              data-v-eb5ad508=""></path>
            <path d="M8.10899 13.8768L13.7864 8.23427" stroke="black" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" data-v-3e6ad914="" data-v-eb5ad508=""></path>
            <path d="M13.769 13.8942L8.12646 8.2168" stroke="black" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" data-v-3e6ad914="" data-v-eb5ad508=""></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="cart >= 0" class="cart-content empty">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" fill="#3a3d46" id="Layer_1" data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="22" height="22">
        <path class="cls-1"
          d="M3,2H17a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2ZM0,3A3,3,0,0,1,3,0H17a3,3,0,0,1,3,3V17a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3Zm10,7C7.24,10,5,7.31,5,4H7c0,2.57,1.67,4,3,4s3-1.43,3-4h2C15,7.31,12.76,10,10,10Z"
          style="fill-rule: evenodd"></path>
      </svg>
      <p>SEU CARRINHO ESTÁ VAZIO</p>
    </div>
    <div class="cart-content" v-for="product in cart" :key="product.id">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="information">
        <div class="name">{{ product.title }}</div>
        <div class="price">R$ {{ formatPrice(product.price) }}</div>
      </div>
      <button @click="removeFromCart(product.id)" aria-label="Remover produto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="24px" height="24px">
          <path
            d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z" />
        </svg>
      </button>
    </div>
    <div class="cart-bottom">
      <button class="finalizar" aria-label="Finalizar compra">Finalizar compra</button>
      <button class="continuar" aria-label="Continuar compra">Continuar comprando</button>
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
    closeCart() {
      this.$emit("close-cart");
      document.body.style.overflow = '';
    },
  },
};
</script>

<style lang="css" scoped>
#cart-product {
  background-color: #fff;
  border: 1px solid var(--color1);
  border-radius: 2px;
  position: absolute;
  top: 35px;
  left: -115px;
  width: 300px;
  z-index: 99;
}

.empty {
  flex-direction: column;
  align-items: center !important;
}

.empty svg {
  margin: 15px 0;
}

.cart-topo {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

button {
  background-color: transparent;
  border: none !important;
}

.cart-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  align-items: flex-start;
}

.image {
  width: 60px;
}

.name {
  font-size: var(--size1);
}

.information {
  width: 50%;
}

.cart-bottom {
  padding: 10px;
}

.cart-bottom button {
  display: flex;
  width: 100%;
  height: 42px;
  justify-content: center;
  font-size: var(--size1);
  align-items: center;
  margin-bottom: 5px;
}

.finalizar {
  background-color: var(--color1);
  color: #fff;
}

.continuar {
  border: 1px solid var(--color2) !important;
}

@media (max-width: 1023px) {
  #cart-product {
    left: -170px;
  }
}
</style>
