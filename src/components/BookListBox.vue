<template>
  <v-card elevation="2" class="card-box ma-4 pa-3 align-self-stretch d-flex flex-column justify-start align-center">
    <v-img
        :src="$props.data.cover"
    ></v-img>
    <v-card-title>
      {{ $props.data.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ $props.data.authors }}
    </v-card-subtitle>
    <v-card-actions class="d-flex justify-center align-end">
      <v-btn
          v-if="isInCart"
          color="red darken-3 white--text"
          @click="removeFromCart($props.data.id)"
      >
        REMOVE FROM CART
      </v-btn>
      <v-btn
          v-else
          color="blue darken-3 white--text"
          @click="addToCart($props.data.id)"
      >
        ADD TO CART
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import {BookListI} from "@/types/book";
import {mapMutations, mapState} from "vuex";

export default Vue.extend({
  name: "BookListBox",
  props: {
    data: {
      required: true,
      type: Object as PropType<BookListI>
    }
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/addToCart",
      removeFromCart: "cart/removeFromCart"
    })
  },
  computed: {
    ...mapState('cart', ["cart"]),
    isInCart() {
      return this.cart.some((item: string) => item === this.$props.data.id)
    }
  }
})
</script>

<style scoped lang="scss">
.card-box {
  width: 350px;
}

</style>
