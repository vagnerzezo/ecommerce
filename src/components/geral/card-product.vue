<!-- card-product.vue -->
<template>
  <div class="cardProduct col-md-3" v-for="product in prod" :key="product.id">
    <div class="imgProcuct">
      <img :src="product.image" alt="">
    </div>
    <div class="informantProduct">
      <div class="title">
        <h2>{{ product.title }}</h2>
        {{ product.rating.rate }}
      </div>
      <div class="priceProduct">
        <span>R$ {{ formatPrice(product.price) }}</span>
      </div>
    </div>
    <div class="buttons" aria-label="Adicionar ao carrinho">
      <button class="buy" @click="handleAddToCart(product)"
        :disabled="buttonStates[product.id] !== 'Adicionar ao carrinho'">
        {{ buttonStates[product.id] || 'Adicionar ao carrinho' }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    prod: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      buttonStates: {}
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    ...mapActions(['addProductToCart']),
    handleAddToCart(product) {
      this.$set(this.buttonStates, product.id, 'Adicionando...');
      setTimeout(async () => {
        await this.addProductToCart(product);
        this.$set(this.buttonStates, product.id, 'Adicionado ao carrinho');
        setTimeout(() => {
          this.$set(this.buttonStates, product.id, 'Adicionar ao carrinho');
        }, 5000);
      }, 5000);
    }
  }
};
</script>

<style scoped>
.cardProduct {
  margin-bottom: 30px;
  padding: 15px;
}

.cardProduct:hover {
  box-shadow: 14px -7px 15px -3px rgba(0, 0, 0, 0.1);
}

.cardProduct .imgProcuct {
  height: 212px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.cardProduct img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cardProduct .informantProduct {
  margin-top: 30px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.cardProduct .title {
  height: 50px;
}

.cardProduct .title h2 {
  font-size: var(--size1);
}

.cardProduct .ratingProduct {
  height: 15px;
}

.cardProduct .priceProduct {
  height: 30px;
}
</style>