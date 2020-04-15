<template lang="pug">
ValidationObserver(v-slot="{ passes, errors }")
  form(@submit.prevent="passes(submit)")
    fieldset(v-for="fieldset in fieldsets")
      legend {{ fieldset.legend }}
      field(
        v-for=  "field, id in fieldset.fields"
        :name=  "id"
        :type=  "field.type"
        :key=   "id"
        :id=    "id"
        :label= "id"

        v-model=  "$data[id]"
        :errors=  "errors && errors.length ? errors.filter(err => err.param === id) : null"
        :rules=   "field.v || null"
        :disabled=  "busy"
      )

    input(
      type= "submit"
      :disabled=  "submitDisabled || busy"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver, extend } from 'vee-validate';
import { required, confirmed, length, email } from "vee-validate/dist/rules";

import field from 'c/field'

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "This field must be a valid email"
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match"
});

extend("length", {
  ...length,
  message: "This field must have 2 options"
});

export default {
  data () {
    const data = {}
    Object.keys(this.fieldsets).map(fieldset => {
      Object.keys(this.fieldsets[fieldset].fields).map(field => {
        data[field] = ''
      })
    })
    return data
    // return form.componentData(isNew, this.$store.getters)
  },
  computed: {
    submitDisabled () {
      return Object.keys(this.$data)
        .filter(fieldId => !this.$data[fieldId])
        .length > 0
    }
  },
  components: {
    field,
    ValidationObserver
  },
  methods: {
    submit () {
      this.$children[0].validate().then(ok => {
        if (ok) this.$emit('submit', this.$data)
      })
    },
  },
  props: {
    name: {
      type: String,
      default: 'unnamed'
    },
    fieldsets: {
      type: Array,
      required: true
    },
    useToastServerErrors: {
      type: Boolean,
      default: true
    },
    busy: {
      type: Boolean
    }
  }
}
</script>

<style lang="stylus">
form
  input[type="submit"]
    margin-top 16px

  legend
    text-align center
    text-transform capitalize
    margin-bottom 20px

  label
    line-height 20px
    margin-bottom 4px

  ul
    > li
      padding 0

  > fieldset
    > span
      display block
      &+span
        margin-top 8px
</style>
