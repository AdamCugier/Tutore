<template>
  <v-card elevation="2" class="card-box ma-4 pa-3 align-self-stretch d-flex flex-column justify-start align-center">
    <v-img
        :src="this.$props.data.cover"
    ></v-img>
    <v-card-title>
      {{ this.$props.data.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ this.$props.data.authors }}
    </v-card-subtitle>
    <v-card-actions class="d-flex justify-center align-end">
      <v-btn
          color="blue darken-3 white--text"
      >
        ADD TO CART
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, {PropType} from "vue";
import {BookListI} from "@/types/book";

export default Vue.extend({
  name: "BookListBox",
  props: {
    data: {
      required: true,
      type: Object as PropType<BookListI>
    }
  }
})
</script>

<style scoped lang="scss">
.card-box {
  width: 350px;
}

</style>
