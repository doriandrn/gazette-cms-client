<template lang="pug">
main.profile
  //- h1 Profile

  div(v-if="profile")
    avatar.profile__pic(:avatar="profile.avatar || profile.picture")
    h3 {{ profile.name }} #[span.ver(v-if="profile.verified" data-icon="verified") Verified]
    p.meta
      span.handle @{{ profile.username || profile.handle }}
    p.bio(v-if="profile.bio") {{ profile.bio }}
    p.meta
      span.location(v-if="profile.country") #[span.flag #[img(:src="`/icons/flags/${profile.country}.png`") ]] Romania
      span.jdate(v-if="profile.createdAt") Joined #[timedate(:unixTime="Number(profile.createdAt) * 1000")]
    //- button.follow(data-icon="plus") Follow

    h4 Publications
</template>

<script>
import avatar from 'c/social/avatar'
import timedate from 'c/timedate'

export default {
  async asyncData ({ params, $axios }) {
    const { username } = params
    const resp = await $axios.get(`api/profile/${username}`)
    console.log(username, resp)
    return { profile: { ...resp.data } }
  },
  name: 'userProfile',
  components: {
    avatar,
    timedate
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
  .ver
    font-size 0
    display inline-block
    vertical-align top
    margin-top 3px
    margin-left 8px

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
