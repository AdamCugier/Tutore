<template>
  <DefaultLayout>
    <template v-slot:body>
      <div class="text-center">
        <h1 class="mb-8">Thank you for your order!</h1>
        <p class="font-weight-bold">Package will be sent on data:</p>
        <p>Name: {{ clientData.name }} {{ clientData.surname }}</p>
        <p>City: {{ clientData.place }}, Post Code {{ clientData.postal_code }}</p>
        <p>Price: {{ clientData.price }}</p>
        <v-btn class="mt-4 blue darken-3 white--text" @click="backToHome">HOME PAGE</v-btn>
      </div>
    </template>
  </DefaultLayout>
</template>
<script lang="ts">
import Vue from 'vue'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {mapMutations, mapState} from "vuex";

export default Vue.extend({
  name: 'ThankYouView',
  components: {
    DefaultLayout,
  },
  computed: {
    ...mapState('clientData', ["clientData"]),
    ...mapMutations('cart', ["clearCart"]),
    ...mapMutations('clientData', ["clearClientData"])
  },
  methods: {
    backToHome() {
      this.clearCart
      this.clearClientData
      this.$router.push({name: 'home'})
    }
  }
})
</script>
