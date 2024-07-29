<template>
  <div id="category">
    <ul class="categories">
      <li v-for="category in categories" :key="category">
        <router-link :to="`/category/${category}`">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
          this.categories = json;
        });
    }
  }
};
</script>
<style lang="css" scoped>
.categories {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 30px;
}
</style>