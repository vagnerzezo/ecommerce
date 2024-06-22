<template>
  <div id="header">
    <div class="wrapper">
      <div class="row">
        <div class="col-3 col-md-2">
          <Logo />
        </div>
        <div class="col-3 col-md-8">
          <Category />
        </div>
        <div class="col-3 col-md-2">
          <Icone @toggle-cart="toggleCart" />
          <Cart v-if="showCart" @close-cart="closeCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/header/logo.vue";
import Icone from "@/components/header/icones.vue";
import Category from "@/components/header/categories.vue";
import Cart from "@/components/Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Logo,
    Icone,
    Category,
    Cart,
  },
  computed: {
    ...mapGetters(["showCart"]),
  },
  methods: {
    toggleCart() {
      this.$store.commit("setShowCart", true);
    },
    closeCart() {
      this.$store.commit("setShowCart", false);
    },
  },
};
</script>
<style scoped>
#header {
  box-shadow: 0px 15px 10px -15px #111;
}
</style>
