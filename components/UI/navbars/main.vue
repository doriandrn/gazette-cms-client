<template lang="pug">
nav(:data-vertical="vertical")
  ul(v-if="items")
    li(v-for="item, id in items")
      nuxt-link(v-if="itemIsLink(id)" :to="link(id)" :data-icon="icons ? item.icon || id : null") {{ item.name || item }}
      button(v-else @click="action(id)" :data-icon="icons ? item.icon || id : null") {{ item.name || item }}

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
    action (id) {
      switch (id) {
        case 'back':
          window.history.back()
          break

        case 'publish':
          const draftId = this.$route.path.split('/')[2]
          let draft = JSON.parse(window.localStorage.getItem('drafts'))[draftId]
          draft = draft[draft.length - 1]
          console.log('publishing', draftId)
          delete draft.uid
          delete draft.revision
          delete draft.updatedAt
          draft.publishedAt = new Date()
          this.$axios.post('/api/content', draft).then(res => { console.log('R', res) })
          break

        default:
          this.doAction(id)
          break
      }
    },
    link (id) {
      if (id === 'profile') {
        return `/${id}/${this.$auth.user.handle}`
      }
      return `/${id}`
    },
    itemIsLink (id) {
      return ['profile', 'auth', 'favs', 'topics', 'trending'].indexOf(id) > -1
    },
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
