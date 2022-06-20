<template>
  <v-main class="fill-height">
    <v-row no-gutters class="py-0 px-10 template-header blue darken-4">
      <v-col cols="12" class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <v-icon large color="white">fa fa-book</v-icon>
          <span class="ml-4 headline white--text text-uppercase font-weight-bold d-none d-sm-inline">{{ title }}</span>
        </div>
        <div>
          <slot name="header-right"></slot>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters align="start" class="template-body overflow-y-auto">
      <v-container>
        <v-col>
          <slot name="body"></slot>
        </v-col>
      </v-container>
    </v-row>
    <v-row no-gutters class="template-footer">
      <v-col cols="12" class="d-flex justify-center align-center">
        <span class="grey--text text--lighten-1">{{ author }}</span>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import Vue from 'vue'

export interface DefaultLayoutI {
  author: string,
  title: string
}

export default Vue.extend({
  name: 'DefaultLayout',
  data(): DefaultLayoutI {
    return {
      author: 'Adam Cugier',
      title: 'Book Shop'
    }
  }
})
</script>
<style scoped lang="scss">
.template- {
  &header {
    height: 70px;
  }

  &body {
    height: calc(100% - 70px - 50px);
  }

  &footer {
    height: 50px;
  }
}
</style>
