import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: [],
    cart: [],
    categories: [],
    token: null,
    screenWidth: null,
    showCart: false
  },
  mutations: {
    setScreenWidth(localState, payload) {
      localState.screenWidth = payload;
    },
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
    },
    setShowCart(state, show) {
      state.showCart = show;
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
      setTimeout(() => {
        commit('setShowCart', true);
        const elemento = document.querySelector('#ecommerce');
        elemento.classList.add('overlay');
        document.body.style.overflow = 'hidden';
      }, 1000);
      setTimeout(() => {
        commit('setShowCart', false);
        const elemento = document.querySelector('#ecommerce');
        elemento.classList.remove('overlay');
        document.body.style.overflow = '';
      }, 3000);
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
    fetchCategories({ commit }) {
      axios.get('https://fakestoreapi.com/products/categories')
        .then(response => {
          commit('setCategories', response.data);
        });
    },
    fetchProductsByCategory({ commit }, category) {
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response => {
          commit('setProducts', response.data);
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
    isAuthenticated: state => !!state.token,
    showCart: state => state.showCart
  }
});

export default store;