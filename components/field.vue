<template lang="pug">
div(:class="{ error }")
  label(
    v-if=   "type !== 'submit'"
    :for=   "id"
  ) {{ label }} #[em(v-if="!(v && v.indexOf('required') > -1)") opt]
  input(
    :type=          "type"
    :name=          "name"
    :placeholder=   "placeholder"
    :disabled=      "disabled"
    :value=         "value"
    :checked=       "checked"
    @input=        "$emit('input', $event.target.value)"
  )
  p.error(v-if="error") {{ error }}
</template>

<script lang="ts">
export default {
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
    error: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.error
  input
    border-color red !important

p.error
  font-size 12px
  line-height 14px
  margin 8px 0
  color red
</style>
