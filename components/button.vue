<template lang="pug">
button(:title="title")
  slot

  .dropdown(v-if="$slots.dropdown")
    slot(name="dropdown")
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
socials = github facebook

button
  padding 8px 20px
  text-transform uppercase
  font-weight 600
  position relative

  &[icon]
    padding 8px
    &:before
      content ''
      size 24px
      background-repeat no-repeat
      background-size 100%
      display inline-block
      vertical-align middle

  for s in socials
    &[icon=\"{s}\"]
      icon = '~static/icons/social/' + s + '.svg'
      &:before
        background-image: embedurl(icon)

  .dropdown
    cursor default
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

    +above(l)
      min-width 270px

    +above(xl)
      min-width 300px
      padding 32px
</style>
