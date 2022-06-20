<template>
  <div>
    <v-overlay :value="this.loading">
      <v-progress-circular
          indeterminate
          size="64"
      ></v-progress-circular>
    </v-overlay>
    <span>{{ this.bookList }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapActions, mapGetters, mapState} from "vuex";

export default Vue.extend({
  name: "BookList",
  methods: {
    ...mapActions({getBooks: "books/getBooks"})
  },
  computed: {
    ...mapState('books', ['loading']),
    ...mapGetters('books', ['bookList'])
  },
  created() {
    this.getBooks()
  }
})
</script>

<style scoped>

</style>
