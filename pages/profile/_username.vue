<template lang="pug">
main.profile
  //- h1 Profile

  div(v-if="profile")
    avatar.profile__pic(:avatar="profile.picture")
    h3 {{ profile.name }}
    p.meta
      span.handle @{{ profile.username || profile.handle }}
    p.meta
      span.location Romania
      span.jdate Joined 3 weeks ago
    p.bio Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    //- button.follow(data-icon="plus") Follow
</template>

<script>
import avatar from 'c/social/avatar'

export default {
  async asyncData ({ params, $axios }) {
    const { username } = params
    const resp = await $axios.get(`api/profile/${username}`)
    console.log(username, resp)
    return { profile: { ...resp.data } }
  },
  name: 'userProfile',
  components: {
    avatar
  },
  // computed: {
  //   profile () {
  //     return this.$auth.$state.user
  //   }
  // }
}
</script>


<style lang="stylus" scoped>
.profile
  h3
    &+p.meta
      margin-top -16px

  button.follow[data-icon]
    font-size 16px
    &:before
      background-size 12px

  > div
    display flex
    flex-flow column nowrap
    align-items center

  p.bio
    max-width 80%
    font-size 16px
    line-height 22px
    font-style italic

  &__pic
    &.avatar
      size 200px
      margin 0 auto 32px
      border-radius 200px

      +above(l)
        float left
        margin-right 32px
</style>
