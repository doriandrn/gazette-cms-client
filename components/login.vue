<template lang="pug">
.login
  .login__social
    label Sign in with:
    button(
      v-for="s in strategies"
      @click="$auth.loginWith(s.key)"
      :title="`Login with ${s.name}`"
      :data-icon=  "s.key"
    ) {{ s.name }}

  span.or or

  .login__form
    frm(
      name= "login"
      :fieldsets = "fieldsets"
      @submit = "$auth.loginWith('local', { data: loginData })"
    )

    button.forgot Forgot your password?

</template>

<script>
import frm from 'c/form'

const fieldsets = [{
  legend: "login",
  fields: {
    username: {
      v: 'required'
    },
    password: {
      v: 'required',
      type: 'password'
    }
  }
}]

export default {
  data () {
    return {
      fieldsets
    }
  },

  computed: {
    strategies: () => ([
     { key: 'auth0', name: 'Auth0', color: '#ec5425' },
     { key: 'google', name: 'Google', color: '#4284f4' },
     { key: 'facebook', name: 'Facebook', color: '#3c65c4' },
     { key: 'github', name: 'GitHub', color: '#202326' }
    ]),
    loginData () {
      const { username, password } = this
      return { username, password }
    }
  },

  components: {
    frm
  }
}
</script>

<style lang="stylus">
.or
  margin 40px 0
  position relative
  display block
  font-size 11px

  &:before
  &:after
    content ''
    height 1px
    width 45%
    position absolute
    top calc(50% + 1px)
    background #eee

  &:before
    left 0

  &:after
    right 0

.login
  text-align center

  &__social
    > label
      display block
      text-align center
      margin-bottom 16px

    > button
      font-size 0

  input
    width 100%

  > div
    &+div
      margin-top 32px
</style>
