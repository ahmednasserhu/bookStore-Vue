<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg bg-secondary">
    <div class="container-fluid">
      <!-- <a class="navbar-brand bookStore">Book Store</a> -->
      <router-link to="/" class="navbar-brand">Book Store</router-link>
      <div class="ml-auto">
        <ul class="navbar-nav">
          <li>
            <p class="m-2">with total price: {{ getTotalCost() }}</p>
          </li>
          <li class="nav-item">
            <router-link to="/wishlist" class="btn btn-success">WishList</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useWishlistStore } from '@/store/wishlist';
export default {
  methods: {
    getTotalCost() {
      return useWishlistStore().getTotalPrice();
    }
  }
};
</script>

<style>
</style>