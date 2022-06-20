<template>
  <div>
    <v-overlay :value="this.loading">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
    <h1 v-if="bookList.length > 0">Find something for you !</h1>
    <div class="d-flex justify-space-between align-start flex-wrap">
      <BookListBox v-for="(book, index) in bookList" :data="book" :key="`box-${index}`"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapActions, mapGetters, mapState} from "vuex";
import BookListBox from "@/components/BookListBox.vue";

export default Vue.extend({
  name: "BookList",
  components: {
    BookListBox
  },
  methods: {
    ...mapActions({getBooks: "books/getBooks"})
  },
  computed: {
    ...mapState('books', ['loading', 'books']),
    ...mapGetters('books', ['bookList'])
  },
  created() {
    if (this.books.length === 0) {
      this.getBooks()
    }
  }
})
</script>

<style scoped>

</style>
