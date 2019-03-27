<template lang="pug">
.login
  .login__form
    frm(
      :fields = "fields"
      @submit = ""
    )

  .login__social
</template>

<script>
import frm from 'c/form'

export default {
  data () {
    return {
      fields: {
        username: {
          v: 'required'
        },
        password: {
          v: 'required',
          type: 'password'
        }
      },
    }
  },

  components: {
    frm
  }
}
</script>

<style lang="stylus">

</style>
