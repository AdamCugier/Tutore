<template>
  <div class="d-flex justify-start align-center">
    <span>{{ $props.index + 1 }}</span>
    <div class="cart-list-element-img d-none d-sm-inline-block">
      <v-img
          :src="$props.data.image"
      ></v-img>
    </div>
    <div class="cart-list-element-description ml-2 ml-sm4 ml-md-6">
      <h4>{{ $props.data.title }}</h4>
      <p>{{ $props.data.authors }}</p>
    </div>
    <div class="cart-list-element-price ml-2 ml-sm4 ml-md-6 d-none d-sm-inline-block">
      <span>{{ $props.data.price }}</span>
    </div>
    <div class="cart-list-element-actions d-flex flex-column align-center d-sm-block ml-2 ml-sm4 ml-md-6 ">
      <div class="cart-list-element-price d-block d-sm-none">
        <span>{{ $props.data.price }}</span>
      </div>
      <v-btn
          dark
          color="red darken-3 white--text"
          @click="removeFromCart($props.data.isbn13)">
        <span class="text--white mr-2 font-weight-bold">DELETE</span>
        <v-icon small color="outline">fa fa-trash</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import {BookI} from "@/types/book";
import {mapMutations} from "vuex";

export default Vue.extend({
  name: "CartListElement",
  props: {
    data: {
      required: true,
      type: Object as PropType<BookI>
    },
    index: {
      required: true,
      type: Number
    }
  },
  methods: {
    ...mapMutations({
      removeFromCart: "cart/removeFromCart"
    })
  }
})
</script>

<style scoped lang="scss">

.cart-list-element-img {
  width: 100px;
  height: auto;
}

.cart-list-element-description {
  width: 100%;
}
</style>
