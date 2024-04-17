<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="wishlist">
    <div class="d-flex align-items-baseline justify-content-between p-2 m-2" v-if="wishlistIsEmpty">
      <h4 class="w-100 text-center">No books added to the Wishlist</h4>
    </div>
    <div class="d-flex align-items-baseline justify-content-between p-2 m-2" v-else>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Actions</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in wishlist.items" :key="element.id">
            <td>{{ element.isbn }}</td>
            <td>{{ element.name }}</td>
            <td>{{ element.author }}</td>
            <td>{{ element.category }}</td>
            <td>
              <button class="btn btn-danger" @click="removeFromWishlist(element.isbn)">Remove</button>
            </td>
            <td>{{ formatCurrency(element.price) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="4">Total Price</th>
            <th colspan="2">{{ formatCurrency(getTotalCost()) }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { useWishlistStore } from "@/store/wishlist";

export default {
  computed: {
    wishlist() {
      return useWishlistStore().wishlist;
    },
    wishlistIsEmpty() {
      return this.wishlist.items.length === 0;
    }
  },
  methods: {
    formatCurrency(value) {
      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
      }).format(value);
    },
    removeFromWishlist(isbn) {
      useWishlistStore().removeFromWishlist(isbn);
    },
    getTotalCost() {
      return useWishlistStore().getTotalPrice();
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
