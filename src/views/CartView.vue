<template>
  <DefaultLayout>
    <template v-slot:header-right>
      <router-link to="/" class="text-decoration-none">
        <v-btn
            dark
            color="white">
          <span class="text--primary mr-2">BACK TO BOOKLIST</span>
          <v-icon small color="secondary">fa fa-book</v-icon>
        </v-btn>
      </router-link>
    </template>
    <template v-slot:body>
      <CartList/>
    </template>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CartList from "@/components/CartList.vue";

export default Vue.extend({
  name: 'CartView',
  components: {CartList, DefaultLayout},
})
</script>
