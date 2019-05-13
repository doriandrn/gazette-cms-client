<template lang="pug">
div(:class="{ error: errors.has(id, context) }")
  label(
    v-if=   "type !== 'submit'"
    :for=   "id"
  ) {{ label }} #[em(v-if="!(v && v.indexOf('required') > -1)") opt]
  input(
    :type=          "type"
    :name=          "id"
    :placeholder=   "placeholder"
    :disabled=      "disabled"
    :value=         "value"
    v-validate=     "v || null"

    :checked=       "checked"

    @input=        "$emit('input', $event.target.value)"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    label: {
      type: String,
      default: 'Unlabeled!'
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: 'unnamed'
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    value: {
      type: [Number, String, Object, Array]
    },
    v: {
      type: String
    },
    checked: {
      type: Boolean
    },
    context: {
      type: String,
      default: 'smh'
    }
  }
})
export default class Field extends Vue {

}
</script>
