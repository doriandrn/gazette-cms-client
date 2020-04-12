<template lang="pug">
.login
  .login__form
    frm(
      name= "login"
      :fields_ = "formfields"
      @submit = "$auth.loginWith('local', { data: loginData })"
    )

    a Forgot your password?

  .login__social
    label sign in with
    button(
      v-for="s in strategies"
      @click="$auth.loginWith(s.key)"
      :title="`Login with ${s.name}`"
      :data-icon=  "s.key"
    ) {{ s.name }}
</template>

<script>
import frm from 'c/form'

const formfields = {
  username: {
    v: 'required'
  },
  password: {
    v: 'required',
    type: 'password'
  }
}

export default {
  data () {
    return {
      formfields
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
