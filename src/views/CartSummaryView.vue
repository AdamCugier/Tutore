<template>
  <DefaultLayout>
    <template v-slot:header-right>
      <router-link to="/cart" class="text-decoration-none">
        <v-badge
            :content="getCartItemsCount"
            :value="getCartItemsCount"
            color="red"
            overlap
        >
        <v-btn
            dark
            color="white">
          <span class="text--primary mr-2">BACK TO CART</span>
          <v-icon small color="secondary">fa fa-cart-shopping</v-icon>
        </v-btn>
        </v-badge>
      </router-link>
    </template>
    <template v-slot:body>
      SUMMARY {{computeValue}}
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {mapGetters, mapState} from "vuex";
import {BookI} from "@/types/book";

export default Vue.extend({
  name: 'CartSummaryView',
  components: {DefaultLayout},
  computed: {
    ...mapGetters('cart', ["getCartItemsCount"]),
    ...mapState('cart', ["cart"]),
    ...mapState('books', ["books"]),
    selectedBooks(): BookI[] {
      return this.cart.map((id: string) => this.books.find((book: BookI) => book.isbn13 === id))
    },
    computeValue(): number {
      const prices: number[] =this.selectedBooks.map((book: BookI) => Number(book.price.substring(1)))
      return prices.reduce((acc, value) => acc + value)
    }
  }
})
</script>
