<template>
  <div id="category">
    <ul class="categories">
      <li v-for="category in categories" :key="category">
        <a href=""> {{ category }}</a>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'categoria',
  computed: {
    categories() {
      return this.$store.getters.allCategories; // Acessando o getter 'allCategories' do Vuex
    },
    device() {
      return this.$store.state.screenWidth < 1024 ? 'mobile' : 'desktop';
    }
  },
  mounted() {
    this.fetchCategories(); // Chama a ação 'fetchCategories' quando o componente é montado
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch('fetchCategories'); // Dispara a ação 'fetchCategories' para buscar as categorias
    }
  }
}
</script>
<style lang="css" scoped>
.categories {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 30px;
}
</style>