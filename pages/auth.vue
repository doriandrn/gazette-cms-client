<template lang="pug">
//- transition(name="slide")
main#auth
  //- h1 Authenticate with
  login(v-if="!$auth.loggedIn")
  div(v-else) Logged in.
    button(@click="$auth.logout()") Logout
</template>

<script>
import login from 'c/login'

export default {
  name: 'auth',
  components: {
    login
  },
  // transition: {
  //   name: 'auth',
  //   mode: 'slide-left'
  // },
  transition: {
    name: 'slide'
  },
  middleware: ['auth']
  // auth: 'guest'
}
</script>

<style lang="stylus" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: .5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
