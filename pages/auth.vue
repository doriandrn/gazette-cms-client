<template lang="pug">
main#auth
  //- h1 Authenticate with
  login
</template>

<script>
import login from 'c/login'

export default {
  components: {
    login
  },
  // middleware: 'auth'
  // auth: 'guest'
}
</script>
