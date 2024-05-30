<template>
  <div class="home">
    <Fullbanner />
    <HomeShowcaseOne :prod="products" />
    <HomeShowcaseTwo :prod="products" />
    <HomeShowcaseThree :prod="products" />
  </div>
</template>
<script>
import Fullbanner from '@/components/home/fullbanner.vue'
import HomeShowcaseOne from '@/components/home/showcases/showcase-one.vue'
import HomeShowcaseTwo from '@/components/home/showcases/showcase-two.vue'
import HomeShowcaseThree from '@/components/home/showcases/showcase-three.vue'

export default {
  name: 'Home',
  components: {
    Fullbanner,
    HomeShowcaseOne,
    HomeShowcaseTwo,
    HomeShowcaseThree
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  created() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>
