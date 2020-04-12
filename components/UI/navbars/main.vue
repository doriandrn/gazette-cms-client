<template lang="pug">
nav(:data-vertical="vertical")
  ul(v-if="items")
    li(v-for="item, id in items")
      nuxt-link(v-if="itemIsLink(id)" :to="`/${id}`" :data-icon="icons ? item.icon || id : null") {{ item.name || item }}
      button(v-else @click="doAction(id)" :data-icon="icons ? item.icon || id : null") {{ item.name || item }}

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
    }),
    itemIsLink (id) {
      return ['auth', 'favs', 'topics'].indexOf(id) > -1
    }
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
.action
  position relative
</style>
