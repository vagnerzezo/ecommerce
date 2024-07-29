<template>
  <div class="category wrapper">
    <div class="title">
      <h2>Category</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula neque, hendrerit et suscipit sed,
        sagittis at dolor. Sed nec enim elit. Mauris id nibh eu nulla posuere bibendum. Vivamus eu sagittis quam, nec
        posuere nibh. Ut urna dui, gravida quis efficitur id, eleifend blandit nibh. Sed felis lorem, luctus vitae nulla
        sed, pharetra gravida leo. Integer eros est, ornare vel lectus id, ullamcorper auctor nibh. Vivamus ac egestas
        nisl. Curabitur fermentum risus sit amet felis egestas aliquam. Sed consectetur mollis condimentum.
      </p>
    </div>
    <div class="row">
      <div class="cardProduct col-6 col-md-3" v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'Product', params: { id: product.id } }" class="product-link">
          <div class="imgProcuct">
            <img :src="product.image" :alt="product.title" loading="lazy" />
          </div>
          <div class="informantProduct">
            <div class="title">
              <h2>{{ product.title }}</h2>
              {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)
            </div>
            <div class="priceProduct">
              <span>R$ {{ formatPrice(product.price) }}</span>
            </div>
          </div>
          <div class="buttons" aria-label="Adicionar ao carrinho">
            <button class="buy">Adicionar ao carrinho</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  data() {
    return {
      products: []
    };
  },
  watch: {
    category: {
      immediate: true,
      handler(newCategory) {
        this.fetchProducts(newCategory);
      }
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    fetchProducts(category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => {
          this.products = json;
        });
    },
    addToCart(product) {
      this.$store.dispatch('addProductToCart', product);
    }
  }
};
</script>

<style scoped>
.category {
  margin: 50px auto;
  padding: 0px 15px;
}

.category .title {
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

.product-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

@media (max-width: 1023px) {
  .category {
    margin: 15px auto;
  }

  .category .title {
    margin: 25px 0;
  }

  .cardProduct .title{
    height: 90px;
  }
}
</style>
