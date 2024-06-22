<template>
  <div id="home">
    <Fullbanner />
    <HomeShowcaseOne :prod="products" class="vitrine" />
    <BannerMeio />
    <HomeShowcaseTwo :prod="products" class="vitrine" />
    <HomeShowcaseThree :prod="products" class="vitrine" />
  </div>
</template>
<script>
import Fullbanner from "@/components/home/fullbanner.vue";
import HomeShowcaseOne from "@/components/home/showcases/showcase-one.vue";
import BannerMeio from "@/components/home/banner-meio.vue";
import HomeShowcaseTwo from "@/components/home/showcases/showcase-two.vue";
import HomeShowcaseThree from "@/components/home/showcases/showcase-three.vue";

export default {
  name: "Home",
  components: {
    Fullbanner,
    HomeShowcaseOne,
    BannerMeio,
    HomeShowcaseTwo,
    HomeShowcaseThree,
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
<style lang="css" scoped>
@media (max-width: 1023px) {
  .vitrine {
    padding: 0 15px;
  }
}
</style>
