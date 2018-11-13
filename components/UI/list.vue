<template lang="pug">
ul(v-if="!ordered")
  slot
ol(v-else)
  slot
</template>

<script>
export default {
  props: {
    ordered: Boolean,
    default: false
  }
}
</script>
