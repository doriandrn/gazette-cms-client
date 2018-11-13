<template lang="pug">
.admin
  nav
    nuxt-link(
      v-for=  "section in sections"
      :key=   "section"
      :to=    "`admin/${section}`"
    ) {{ section }}
  main

</template>

<script>
const sections = [
  'categories',
  'taxes',
  'content',
  'appearance',
  'modules',
  'users'
]

export default {
  data () {
    return {
      sections
    }
  }
}
</script>
