<template>
  <div class="page-product wrapper">
    <div class="product row">
      <div class="image col-12 col-md-6">
        <div class="productImg">
          <img :src="product.image" alt="Product Image" />
        </div>
      </div>
      <div class="information col-12 col-md-6">
        <div class="info">
          <h1 class="name">{{ product.title }}</h1>
          <div class="category">{{ product.category }}</div>
          <div class="rating">
            {{ product.rating?.rate }} ({{ product.rating?.count }} reviews)
          </div>
        </div>
        <div class="price">${{ product.price }}</div>
        <div class="description">{{ product.description }}</div>
        <button class="buy" @click="addProductToCart(product)">
          Adicionar ao carrinho
        </button>
      </div>
      <div class="banners">
        <div v-if="product.category" class="imageText">
          <img
            src="https://i.postimg.cc/zXhfKNFd/man01.png"
            border="0"
            alt="man01"
          />
          <div class="text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      product: {},
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    }
  },
  watch: {
    productId: {
      immediate: true,
      handler(newId) {
        this.fetchProduct(newId);
      },
    },
  },
  methods: {
    async fetchProduct(id) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productData = await response.json();
        this.product = productData;
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async addProductToCart(product) {
      await this.$store.dispatch("addProductToCart", product);
    },
  },
};
</script>
<style scoped>
.page-product {
  padding: 0 15px;
}

.image .productImg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
}

.image .productImg img {
  max-width: 50%;
  max-height: 100%;
}

.description {
  margin-top: 25px;
}

.buy {
  margin-top: 25px;
  width: 50%;
}

.imageText {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.text {
  padding-left: 50px;
}

@media (max-width: 1024px) {
  .image .productImg {
    height: 500px;
  }

  h1 {
    font-size: var(--size4);
  }

  .banners {
    width: 100%;
    height: auto;
  }

  .imageText {
    flex-direction: column;
    margin-top: 50px;
  }

  .imageText img {
    margin-bottom: 15px;
  }

  .imageText .text {
    padding: 0 15px;
  }

  .buy {
    width: 100%;
    height: 50px;
  }
}
</style>
