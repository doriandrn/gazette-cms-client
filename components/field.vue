<template lang="pug">
ValidationProvider(
  :vid=   "id"
  :name=  "label"
  :rules= "rules"
  v-slot= "{ errors }"
)
  label(
    v-if=   "type !== 'submit'"
    :for=   "name"
  ) {{ label }} #[em(v-if="!(rules && rules.indexOf('required') > -1)") opt]
  input(
    :type=          "type"
    :name=          "name"
    :id=            "name"
    :placeholder=   "placeholder"
    :disabled=      "disabled"
    :value=         "value"
    :checked=       "checked"
    :class=         " { error: errors && errors.length }"
    @input=        "$emit('input', $event.target.value)"
    v-focus=        "focus"
  )

  ul.errors(v-if="errors")
    li(
      v-for=  "error, i in errors"
      :key= "i"
    ) {{ error.message || error.msg || error || 'Undefined message' }}

</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  directives: {
    focus: {
      bind: function(el, b) {
        if (b.value) el.focus()
      }
      // // directive definition
      // inserted: function (el) {
      //   el.focus()
      // }
    }
  },
  props: {
    focus: {
      type: Boolean,
      default: false
    },
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
    rules: {
      type: [Object, String],
      default: ""
    },
    checked: {
      type: Boolean
    },
    errors: {
      type: Array
    },
    name: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.error
  border-color red !important

p.error
  font-size 12px
  line-height 14px
  margin 8px 0
  color red
</style>
