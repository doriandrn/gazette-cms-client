<template lang="pug">
li
  avatar.user__avatar
  .user__info
    h4
      nuxt-link.author__link(:to="`/profile/author.name.slugify}`") {{ author.name }}
    span.author__role.green(v-if="author.role") {{ author.role }}
    p.author__bio.meta(v-if="size !== 'medium'") {{ author.bio }}
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
