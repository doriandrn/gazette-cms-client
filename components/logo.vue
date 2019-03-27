<template lang="pug">
nuxt-link(:to="href").logo Logo
  img(src="logo.svg")
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
  margin 20px !important

  img
    max-height 60px
</style>
