<template lang="pug">
.option
  label {{ label }}
  select(v-if="type === 'select'")
    option(
      v-for   ="option, id in options"
      :value  ="id"
    ) {{ option }}
  input(
    v-else-if ="type === 'checkbox'"
    type      ="checkbox"
  )
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    options: {
      type: Object
    },
    value: {
      type: [String, Boolean, Array, Object, Number]
    }
  }
}
</script>
