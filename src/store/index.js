import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: [],
    cart: [],
    categories: [],
    token: null
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('setProducts', response.data);
        });
    },
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
    fetchCategories({ commit }) {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categories => {
          commit('setCategories', categories);
        });
    },
    userLogin({ commit }) {
      return fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_"
        })
      })
        .then(res => res.json())
        .then(data => {
          commit('setToken', data.token);
          return data;
        });
    }
  },
  getters: {
    allProducts: state => state.products,
    cartProducts: state => state.cart,
    allCategories: state => state.categories,
    isAuthenticated: state => !!state.token
  }
});

export default store;
