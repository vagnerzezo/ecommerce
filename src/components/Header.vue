<template>
  <div id="header">
    <div class="wrapper">
      <div class="row">
        <div class="header-logo col-6 col-md-2">
          <Logo />
        </div>
        <div class="header-menu col-2 col-md-8">
          <div v-if="isMobile">
            <Hamburger @openMenu="toggleMenu" />
          </div>
          <div v-else>
            <Category />
          </div>
        </div>
        <div class="header-icone col-4 col-md-2">
          <Icone @toggle-cart="toggleCart" />
          <Cart v-if="showCart" @close-cart="closeCart" />
        </div>
      </div>
    </div>
    <transition name="slide">
      <CategoryMob v-if="openMenu" @closeMenu="toggleMenu" />
    </transition>
  </div>
</template>

<script>
import Logo from "@/components/header/logo.vue";
import Icone from "@/components/header/icones.vue";
import Category from "@/components/header/categories.vue";
import CategoryMob from "@/components/header/menu-hamburger.vue";
import Cart from "@/components/Cart.vue";
import Hamburger from "@/components/header/hamburger.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      openMenu: false
    };
  },
  components: {
    Logo,
    Icone,
    Category,
    CategoryMob,
    Cart,
    Hamburger
  },
  computed: {
    ...mapGetters(["showCart"]),
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    fechaMenu() {
      this.openMenu = false;
    },
    toggleCart() {
      this.$store.commit("setShowCart", true);
      const elemento = document.querySelector('#ecommerce');
      elemento.classList.add('overlay');
      document.body.style.overflow = 'hidden';
    },
    closeCart() {
      this.$store.commit("setShowCart", false);
      const elemento = document.querySelector('#ecommerce');
      elemento.classList.remove('overlay');
      document.body.style.overflow = '';
    },
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0);
}
</style>

<style scoped>
#header {
  box-shadow: 0px 15px 10px -15px #111;
  position: sticky;
  top: 1px;
  background: #fff;
  z-index: 99;
  width: 100%;
}

@media (max-width: 1024px) {
  .header-menu {
    order: 1;
  }

  .header-logo {
    order: 2;
    display: flex;
    justify-content: center;
    height: 90px;
  }

  .header-icone {
    order: 3;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .row {
    width: 100%;
    justify-content: space-evenly;
    margin: 0;
  }
}
</style>