<template lang="pug">
button
  slot

  .dropdown(v-if="$slots.dropdown")
    slot(name="dropdown")
</template>

<script>

</script>

<style lang="stylus">
button
  padding 8px 20px
  text-transform uppercase
  font-weight 600
  position relative

  .dropdown
    position absolute
    top 100%
    right 0
    width 85vw
    padding 24px
    background white
    box-shadow 0 2px 3px 2px rgba(black, .5)

    +above(m)
      width auto
      min-width 240px
</style>
