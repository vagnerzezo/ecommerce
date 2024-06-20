<template>
  <div class="content">
    <Topo />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Topo from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Home",
  components: {
    Topo,
    Footer,
  },
};
</script>

