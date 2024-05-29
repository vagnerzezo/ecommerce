<template>
  <div class="content">
    <Topo />
    <HomeEcommerce />
  </div>
</template>

<script>
import HomeEcommerce from './views/Home.vue'
import Topo from './components/Header.vue'

export default {
  name: 'Home',
  components: {
    HomeEcommerce,
    Topo
  }
}
</script>

