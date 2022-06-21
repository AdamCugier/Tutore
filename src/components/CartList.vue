<template>
  <div>
    <v-overlay :value="this.loading">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
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
import {mapActions, mapState} from "vuex";
import {BookI} from "@/types/book";
import CartListElement from "@/components/CartListElement.vue";

export default Vue.extend({
  name: "CartList",
  components: {CartListElement},
  data: () => ({
    selectOptions: ['USD', 'PLN', 'EUR'],
    currency: 'USD'
  }),
  created() {
    this.currency = this.currency_code
  },
  computed: {
    ...mapState('cart', {cart: "cart", currency_code: "currency", loading: "loading"}),
    ...mapState('books', ["books"]),
    selectedBooks() {
      return this.cart.map((id: string) => this.books.find((book: BookI) => book.isbn13 === id))
    }
  },
  methods: {
    ...mapActions({
      changeCurrency: 'cart/getCurrencyConverter'
    })
  },
  watch: {
    currency(newVal) {
      this.changeCurrency(newVal)
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
