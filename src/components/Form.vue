<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{errors}" name="Name" rules="required|max:50">
        <v-text-field
            v-model="name"
            :counter="50"
            :error-messages="errors"
            label="Name"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{errors}" name="Surname" rules="required|max:50">
        <v-text-field
            v-model="surname"
            :counter="50"
            :error-messages="errors"
            label="Surname"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{errors}" name="Place" rules="required|max:50">
        <v-text-field
            v-model="place"
            :counter="50"
            :error-messages="errors"
            label="Place"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{errors}" name="Postal code" :rules="{required: true, postalCode: '\\d{2}-\\d{3}'}">
        <v-text-field
            v-model="postal_code"
            :counter="6"
            :error-messages="errors"
            label="Postal code"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{errors}" name="Phone number"
                           :rules="{required: true, phoneNumber: '(?<!\\w)(\\(?(\\+|00)?48\\)?)?[ -]?\\d{3}[ -]?\\d{3}[ -]?\\d{3}(?!\\w)'}">
        <v-text-field
            v-model="phone"
            :error-messages="errors"
            label="Phone number"
            required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{errors}" name="Email" rules="required|email">
        <v-text-field
            v-model="email"
            :error-messages="errors"
            label="Email"
            required
        ></v-text-field>
      </validation-provider>
      <v-text-field
          v-model="discount_code"
          label="Discount Code"
      ></v-text-field>
      <div class="d-flex justify-space-between align-center">
        <h3>To pay: {{ price }}</h3>
        <v-btn
            class="blue darken-3 white--text float-end"
            type="submit"
            :disabled="invalid"
        >
          Submit
        </v-btn>
      </div>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import Vue from 'vue'
import {required, email, max, regex} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'
import {FormDataI} from "@/types/summary";

setInteractionMode('eager')
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})
extend('postalCode', {
  ...regex,
  message: '{_value_} does not match XX-XXX pattern',
})
extend('phoneNumber', {
  ...regex,
  message: '{_value_} does not match +XX XXX XXX XXX pattern',
})
extend('email', {
  ...email,
  message: 'Email must be valid - XXXXXXXX@XX.XX',
})
export default Vue.extend({
  name: 'FormToPlaceOrder',
  components: {ValidationObserver, ValidationProvider},
  props: {
    amount: {
      type: Number
    }
  },
  data: (): FormDataI => ({
    name: '',
    surname: '',
    place: '',
    postal_code: '',
    phone: '',
    email: '',
    discount_code: '',
  }),
  computed: {
    price(): number {
      if (this.discount_code === 'TUTORE12 #') {
        return Math.floor((this.$props.amount * 0.9) * 100) / 100
      }
      return Math.floor(this.$props.amount * 100) / 100
    }
  }

})
</script>
