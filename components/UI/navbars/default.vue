<template lang="pug">
nav(:data-vertical="vertical")
  ul(v-if="items")
    li(v-for="item in items")
      nuxt-link(:to="`/${ slugify(item.name) }`") {{ item.name }}
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: null
    },
    items: {
      type: Array,
      default () {
        return [
          {
            name: 'Tech',
            color: blue
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus">
nav
  a
    display block
    padding 8px 16px
    text-decoration none
    text-transform uppercase
    font-size 10px
    line-height 12px
    font-weight bold
    letter-spacing 1px

  ul
    padding 0
    list-style-type none
    display flex
    flex-wrap wrap
    grid-auto-rows 40px

  &:not([data-vertical])
    ul
      +above(xl)
        flex-direction row
</style>
