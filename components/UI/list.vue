<template lang="pug">
ul(v-if="!ordered")
  slot
ol(v-else)
  slot
</template>

<script>
export default {
  name: 'list',
  props: {
    ordered: Boolean,
    default: false
  }
}
</script>
