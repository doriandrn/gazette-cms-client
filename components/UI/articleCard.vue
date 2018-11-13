<template lang="pug">
li
  h3 {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Unnamed post'
    },
    authorsIds: {
      type: Array,
      default: () => [1, 2]
    },
    category: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>
