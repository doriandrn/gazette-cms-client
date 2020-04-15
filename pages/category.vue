<template lang="pug">
main.main.category
  h1.hero {{ title }}
</template>

<script>
import categories from 'data/categories'

export default {
  computed: {
    title () {
      try {
         return categories.filter(cat => this.slugify(cat.name) === this.$route.params.category)[0].name || 'Uncategorized'
      } catch (e) {
        return undefined
      }
    }
  }
}
</script>
