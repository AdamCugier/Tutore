<template>
  <DefaultLayout>
    <template v-slot:header-right>
      <v-btn
          dark
          color="white">
        <span class="text--primary mr-2">CART</span>
        <v-icon small color="secondary">fa fa-cart-shopping</v-icon>
      </v-btn>
    </template>
    <template v-slot:body>
      <BookList/>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BookList from "@/components/BookList.vue";

export default Vue.extend({
  name: 'HomeView',

  components: {
    BookList,
    DefaultLayout,
  },
})
</script>
