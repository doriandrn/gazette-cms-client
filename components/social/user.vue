<template lang="pug">
.user
  avatar
  p #[nuxt-link(:to="`/profile/${data.id}`") {{ data.name }}] #[slot]
  .user__more
    p {{ data.bio }}
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
        id: 3,
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
  display flex
  flex-flow row nowrap

  .avatar
    margin-right 16px

  &__more
    display none
</style>
