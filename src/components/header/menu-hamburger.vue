<template>
  <div id="category-mobile">
    <div class="category-content">
      <div class="category-header">
        <div class="logo">
          <Logo />
        </div>
        <button aria-label="Fecha menu" @click=" closeMenu()">
          <svg width="40px" height="40px" viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" fill="none"
            stroke="#000000" stroke-width="1.6">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
              stroke-width="0.128" />

            <g id="SVGRepo_iconCarrier">

              <line x1="20" y1="20" x2="44" y2="44" />

              <line x1="44" y1="20" x2="20" y2="44" />

              <rect x="8" y="8" width="48" height="48" />

            </g>

          </svg>
        </button>
      </div>
      <ul class="categories-mobile">
        <li @click=" closeMenu()" v-for="category in categories" :key="category">
          <router-link :to="`/category/${category}`">{{ category }}</router-link>
        </li>
      </ul>
    </div>
    <div class="category-footer">
      <a href="">
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20.25" width="25" height="25">
          <defs></defs>
          <path class="cls-1"
            d="M.83,20.12a.7.7,0,0,1-.7-.7h0C.13,14.51,3.28,11.8,9,11.8s8.88,2.71,8.88,7.62a.7.7,0,0,1-.71.7H.83Zm.71-1.39H16.46c-.27-3.67-2.78-5.54-7.46-5.54s-7.19,1.87-7.46,5.54ZM4.39,4.83A4.56,4.56,0,0,1,8.81.13a1.33,1.33,0,0,1,.2,0,4.55,4.55,0,0,1,4.61,4.49v.21A4.83,4.83,0,0,1,9,9.83a4.83,4.83,0,0,1-4.62-5Zm1.39,0A3.44,3.44,0,0,0,9,8.44a3.44,3.44,0,0,0,3.22-3.61A3.2,3.2,0,0,0,9.14,1.52H9A3.17,3.17,0,0,0,5.77,4.6a1.62,1.62,0,0,0,0,.22Z" />
        </svg>
        Login/Cadastrar
      </a>
    </div>
  </div>
</template>
<script>
import Logo from "@/components/header/logo.vue";
export default {
  name: 'categoriaMobile',
  components: {
    Logo
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  mounted() {
    this.fetchCategories(); // Chama a ação 'fetchCategories' quando o componente é montado
  },
  methods: {
    fetchCategories() {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
          this.categories = json;
        });
    },
    closeMenu() {
      this.$emit('closeMenu');
    },
    menuClose() {
      setTimeout(() => {
        this.$emit('closeMenu');
      }, 2000);
    }
  }
}
</script>
<style lang="css">
#category-mobile .logo {
  height: 85px;
}
</style>
<style lang="css" scoped>
#category-mobile {
  background-color: #fff;
  width: 100%;
  position: absolute;
  top: 0;
  height: 100vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color1);
}

.category-footer {
  border-top: 1px solid var(--color1);
  height: 50px;
  display: flex;
  align-items: center;
}

.category-footer svg {
  margin-right: 15px;
}

.category-footer a {
  display: flex;
  align-items: center;
}

.categories-mobile li {
  margin: 15px 0;
}

.categories-mobile li a {
  font-size: 16px;
}

button {}
</style>