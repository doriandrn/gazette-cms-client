<template lang="pug">
main.main.category
  h1.hero {{ title }}
</template>

<script>
import categories from 'data/categories'

export default {
  computed: {
    title () {
      return categories[this.$route.params.category].name || 'Uncategorized'
    }
  }
}
</script>
