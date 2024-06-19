<template>
  <div class="content">
    <Topo />
    <HomeEcommerce />
    <Footer />
  </div>
</template>

<script>
import HomeEcommerce from "./views/Home.vue";
import Topo from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Home",
  components: {
    HomeEcommerce,
    Topo,
    Footer,
  },
};
</script>

