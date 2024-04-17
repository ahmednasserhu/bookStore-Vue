<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <img :src="book.image" class="card-img-top" alt="Book Cover" />
    <div class="card-body">
      <h5 class="card-title">{{ book.name }}</h5>
      <p class="card-text">Author: {{ book.author }}</p>
      <div class="info-pair">
        <p>
          <strong>Author:</strong>
          {{ book.author }}
        </p>
        <p
          :class="{
            expensive: book.price >= 10,
            affordable: book.price >= 5 && book.price < 10,
            cheap: book.price > 0 && book.price < 5
          }"
        >
          <strong>Price:</strong>
          {{ formatCurrency(book.price) }}
        </p>
      </div>
      <p class="card-text">Number of Pages: {{ book.pages }}</p>
      <p class="card-text">Category: {{ book.category }}</p>
      <p class="card-text">ISBN: {{ book.isbn }}</p>
      <button class="btn btn-danger" @click="addToWishlist">Add to WishList</button>
    </div>
  </div>
</template>

<script>
import { useWishlistStore } from "@/store/wishlist";

export default {
  props: ["book"],
  methods: {
    addToWishlist() {
      try {
        useWishlistStore().addToWishlist(this.book);
        // Provide feedback to the user if needed
      } catch (error) {
        console.error("Error adding to wishlist:", error.message);
        // Handle error or provide feedback to the user
      }
    },
    formatCurrency(value) {
      return Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "EGP",
        minimumFractionDigits: 0
      }).format(value);
    }
  }
};
</script>

<style>
.card-img-top {
  max-width: 100%;
  height: 300px;
}

.info-pair {
  display: flex;
  justify-content: space-between;
}

.expensive {
  color: green;
}

.cheap {
  color: red;
}

.affordable {
  color: blue;
}
</style>
