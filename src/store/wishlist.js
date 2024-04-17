import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlistStore", {
  state: () => ({
    wishlist: {
      items: [],
    },
  }),
  actions: {
    addToWishlist(book) {
      const exists = this.wishlist.items.some(
        (item) => item.isbn === book.isbn
      );
      if (!exists) {
        this.wishlist.items.push(book);
      }
    },
    removeFromWishlist(isbn) {
      const indexToRemove = this.wishlist.items.findIndex(
        (item) => item.isbn === isbn
      );
      if (indexToRemove !== -1) {
        this.wishlist.items.splice(indexToRemove, 1);
      }
    },
    getTotalPrice() {
      console.log(
        this.wishlist.items.reduce((total, item) => total + item.price, 0)
      );
      return this.wishlist.items.reduce((total, item) => total + item.price, 0);
    },
  },
});
