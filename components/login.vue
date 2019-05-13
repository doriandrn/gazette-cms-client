<template lang="pug">
.login
  .login__form
    frm(
      name= "login"
      :fields_ = "formfields"
      @submit = ""
    )

  .login__social
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

  components: {
    frm
  }
}
</script>

<style lang="stylus">

</style>
