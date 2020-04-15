<template lang="pug">
main#auth
  //- h1 Authenticate with
  p(v-if="$auth.busy") busy
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
  middleware: ['auth']
  // auth: 'guest'
}
</script>
