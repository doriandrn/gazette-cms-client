<template lang="pug">
li.field
  label(
    v-if=   "type !== 'submit'"
    :for=   "id"
  ) {{ label }} #[em(v-if="!(v && v.indexOf('required') > -1)") opt]
  input(
    :type=          "type"
    :name=          "id"
    :placeholder=   "placeholder"
    :disabled=      "type === 'submit' ? (errors.any('eb')): disabled"
    v-model=        "value"
    v-validate=     "v || null"
    data-vv-scope=  "eb"
    :data-vv-as=    "label"
    :data-vv-name=  "id"
    :data-vv-path=  "value"
    :checked=       "checked"
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
    }
  }
})
export default class Field extends Vue {

}
</script>
