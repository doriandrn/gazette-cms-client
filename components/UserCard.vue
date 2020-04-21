<template lang="pug">
li(v-if="author")
  nuxt-link(:to="`/profile/${author.handle}`")
    avatar.user__avatar

  .user__info
    h5
      nuxt-link.author__link(:to="`/profile/${author.handle}`") {{ author.name }}
    //- span.author__role.green(v-if="author.role") {{ author.role }}
    p.author__bio.meta(v-if="size !== 'medium'") {{ author.bio }}

li(v-else)
  p Exception: missing author
</template>

<script>
import Avatar from 'c/social/avatar'

export default {
  props: {
    // Author object schema
    author: {
      type: Object
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    // Shortname
    authorLink (name) {
      return name
    }
  },
  components: {
    Avatar
  }
}
</script>

<style lang="stylus">
.user__avatar
  size 50px
</style>
