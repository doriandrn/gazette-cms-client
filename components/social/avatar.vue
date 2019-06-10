<template lang="pug">
.avatar
  img.avatar(:src="avatarImg(avatar)")
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
  methods: {
    avatarImg (id) {
      try {
        return require(`~/static/images/avatars/${id.toLowerCase()}.jpg`)
      } catch (e) {
        return
      }
    }
  }
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
  border-radius 50%
  overflow hidden
  size 40px
</style>
