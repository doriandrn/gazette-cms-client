<template lang="pug">
.author__about
  .avatar imagine
  .author__info
    h4.author__name {{ name }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'John Doe'
    }
  }
}
</script>