<template lang="pug">
nuxt-link(:to="href").logo Logo
  img(src="/logo.svg" alt="Logo")
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="stylus">
.logo
  display block
  font-size 0
  max-height 36px

  +above(xl)
    max-height 48px

  img
    max-height 100%
</style>
