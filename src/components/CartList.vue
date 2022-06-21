<template>
  <div>
    <h1 class="mb-4">Your cart</h1>
    <div v-if="selectedBooks.length > 0">
      <ul class="mb-4">
        <li v-for="(book, index) in selectedBooks" :key="`selected-book-${index}`" class="pa-4 rounded-xl">
          <CartListElement :data="book" :index="index"/>
        </li>
      </ul>
      <div class="d-flex justify-end align-center">
        <div class="d-flex justify-end mr-6">
          <v-select label="Currency" v-model="currency" :items="selectOptions"/>
        </div>
        <router-link to="/summary" class="text-decoration-none">
          <v-btn
              color="blue darken-3 white--text"
          >
            NEXT
          </v-btn>
        </router-link>
      </div>
    </div>
    <p v-else>Your cart is empty :(</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState} from "vuex";
import {BookI} from "@/types/book";
import CartListElement from "@/components/CartListElement.vue";

export default Vue.extend({
  name: "CartList",
  components: {CartListElement},
  data: () => ({
    selectOptions: ['USD', 'PLN', 'EU'],
    currency: 'USD'
  }),
  computed: {
    ...mapState('cart', ["cart"]),
    ...mapState('books', ["books"]),
    selectedBooks() {
      return this.cart.map((id: string) => this.books.find((book: BookI) => book.isbn13 === id))
    }
  }
})
</script>

<style scoped lang="scss">
li {
  list-style: none;
}

li:nth-child(odd) {
  background-color: lightgray;
}
</style>
