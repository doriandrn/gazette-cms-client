<template lang="pug">
.widget
  header.widget__header(v-if="title")
    h2 {{ title }}
  main.widget__content(v-if="$slots.default")
    slot
  //- footer.widget__footer(v-if="")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Unnamed widget'
    }
  }
}
</script>

<style lang="styl">
.widget
  grid-area widget
</style>
