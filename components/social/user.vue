<template lang="pug">
.user
  avatar
  .user__more
    h4 {{ data.name }}
    p user.bio
    .user__social
      p socials
    .user__actions
      button follow
</template>

<script>
import avatar from 'c/social/avatar'

export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        name: 'John Doe',
        bio: 'Artist',
        socials: []
      })
    }
  },
  components: {
    avatar
  }
}
</script>

<style lang="stylus">
.user
  .avatar
    margin-right 16px
  &__more
    display none
</style>
