<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-3 col-md-2">
        <Logo />
      </div>
      <div class="col-3 col-md-8">
        <Category/>
      </div>
      <div class="col-3 col-md-2">
        <Icone />
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/header/logo.vue'
import Icone from '@/components/header/icones.vue'
import Category from '@/components/header/category.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Icone,
    Category,
    Cart
  }
}
</script>
