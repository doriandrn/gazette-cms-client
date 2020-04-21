<template lang="pug">
main#drafts
  h1 Your drafts
  .card(
    v-if="drafts && drafts.length"
    v-for="draft in drafts"
  ) {{ draft.slug }} {{ draft.uid }}
  p(v-else) No drafts

</template>

<script>
export default {
  data () {
    if (!process.browser)
      return {}
    const drafts = JSON.parse(window.localStorage.getItem('drafts'))

    return {
      drafts
    }
  },
}
</script>
