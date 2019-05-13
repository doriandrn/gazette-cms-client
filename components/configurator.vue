<template lang="pug">
#gconfig
  section(v-for=  "section, key in $data")
    h4 {{ String(key).toUpperCase() }}

    div(v-for=  "category in Object.keys(section)")
      h5 {{ category }}

      ul
        li(v-for= "ceva in Object.keys(section[category])")
          label {{ ceva }}

</template>

<script>
export default {
  data () {
    return {
      appearance: {
        palette: {},
        spacings: {},
        typography: {},
        layout: {
          header: {},
          content: {},
          footer: {}
        },
      }
    }
  }
}
</script>

<style lang="stylus">
#gconfig
  background #fafafa
  border 1px solid
  padding 20px
  min-width 300px
</style>
