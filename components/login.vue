<template lang="pug">
.login(v-if= "activeFormId === 'login'")
  form.login__social
    fieldset
      legend Sign in with:
      .socials
        button(
          v-for="s in strategies"
          @click="$auth.loginWith(s.key)"
          :title="`Login with ${s.name}`"
          :data-icon=  "s.key"
        ) {{ s.name }}

  span.or or

  .login__form
    frm(
      name=         "login"
      :fieldsets =  "forms.login.fieldsets"
      @submit =     "userLogin"
      :busy =       "$auth.busy"
    )

    button.forgot(v-if="attempts > 1") Forgot your password?
    button(@click="activeFormId = 'register'") Need an account? Register

.register(v-else-if=  "activeFormId === 'register'")
  h2 Register
  button(@click="activeFormId = 'login'") Back to login
  frm(
    name=         "register"
    :fieldsets =  "forms.register.fieldsets"
    @submit =     "userRegister"
    :busy =       "$auth.busy"
  )
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
      forms: {
        login: { fieldsets },
        register: { fieldsets: [{
          legend: 'Personal Details',
          fields: {
            name: {},
            email: {},
            username: {},
            pass: {},
            confirmPass: {}
          }
        }] }
      },
      attempts: 0,
      activeFormId: 'login'
    }
  },

  computed: {
    strategies: () => ([
     { key: 'auth0', name: 'Auth0', color: '#ec5425' },
     { key: 'google', name: 'Google', color: '#4284f4' },
     { key: 'facebook', name: 'Facebook', color: '#3c65c4' },
     { key: 'github', name: 'GitHub', color: '#202326' }
    ])
  },

  methods: {
    async userLogin(data) {
      let response
      try {
        response = await this.$auth.loginWith('local', { data })
        console.log(response)
        this.$toast.success('Login successful!')
      } catch (err) {
        this.attempts += 1
        this.$toast.error('Invalid credentials')
      }
    }
  },

  components: {
    frm
  }
}
</script>

<style lang="stylus">
.socials
  display flex
  flex-flow row nowrap
  justify-content center

.or
  margin 32px 0
  position relative
  display block
  font-size 11px
  color #aaa

  +above(l)
    margin 40px 0

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

  &__form
    form
      max-width 360px
      margin 0 auto

    .forgot
      margin-top 32px
      font-size 12px

  &__social
    fieldset
      display block
      text-align center

    button
      font-size 0

  input
    width 100%

  > div
    &+div
      margin-top 32px
</style>
