<template lang="pug">
.avatar
  img(v-if="avatar" :src="` data:image/jpeg;charset=utf-8;base64,${avatar}`")
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
    },
    disableLink: {
      type: Boolean,
      default: false
    }
  },
  // methods: {
  //   avatarImg (id) {
  //     try {
  //       return require(`~/static/images/avatars/${id.toLowerCase()}.jpg`)
  //     } catch (e) {
  //       return id
  //     }
  //   }
  // }
}
</script>

<style lang="stylus">
@require '~styles/base'

.avatar
  display block
  // background-image: embedurl('/images/avatars/default-avatar.png')
  background-position 50%
  background-size 100%
  background-color: colors.bg
  border-radius 48px
  overflow hidden
  size 24px

  img
    position relative

  +above(m)
    size 32px

  +above(l)
    size 40px
</style>
