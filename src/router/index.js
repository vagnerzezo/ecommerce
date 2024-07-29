import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import Category from '../views/Category.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/category/:category', 
    name: 'Category',
    component: Category,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;