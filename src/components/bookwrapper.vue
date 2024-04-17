<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(book, index) in books" :key="index">
        <bookcard :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import bookcard from './bookcard.vue'
export default {
  data() {
    return {
      books: []
    };
  },
  components: {
    bookcard
  },
  methods: {
    async fetchBooks() {
      let res = await fetch("http://localhost:5000/books");
      let data = await res.json();
      this.books = data;
    }
  },
  mounted() {
    this.fetchBooks();
  }
};
</script>

<style>
</style>