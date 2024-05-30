<template>
  <div class="showcase wrapper">
    <div class="title">
      <h2>New Collection</h2>
    </div>
    <div class="row">
      <swiper :slides-per-view="4" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide class="cardProduct col-md-3" v-for="product in prod" :key="product.id">
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
          <div class="buttons">
            <button class="buy" @click="addProductToCart(product)">Add to Cart</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: []
    };
  },
  props: {
    prod: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    async addProductToCart(product) {
      await this.$store.dispatch('addProductToCart', product);
    },
  }
};
</script>
<style scoped>
.showcase {
  margin: 50px auto;
}

.showcase .title {
  margin: 50px 0;
}

.cardProduct {
  margin-bottom: 30px;
  padding: 15px;
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