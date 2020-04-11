<template lang="pug">
nav(:data-vertical="vertical")
  ul(v-if="items")
    li(v-for="item, id in items")
      nuxt-link(:to="`/${ slugify(item.name) }`" :data-icon="icons ? item.icon || id : null") {{ item.name || item }}

  .action(v-if="$slots.default")
    button(data-icon="close" @click="doAction('')")
    .action__content
      slot
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      doAction: 'user/doAction'
    })
  },
  props: {
    icons: {
      type: Boolean
    },
    vertical: {
      type: Boolean,
      default: null
    },
    items: {
      type: [Array, Object],
      default () {
        return [
          {
            name: 'Tech',
            color: 'blue'
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
    display flex
    flex-flow column wrap
    padding 8px 16px
    text-decoration none
    font-size 10px
    line-height 12px

  ul
    padding 0
    list-style-type none
    display flex
    flex-wrap wrap
    grid-auto-rows 40px

  .action
    position relative

  &:not([data-vertical])
    ul
      +above(xl)
        flex-direction row
</style>
