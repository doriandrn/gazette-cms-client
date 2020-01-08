<template lang="pug">
#gconfig(v-if="cfgOpen")
  span.close(@click  = "toggleConfig") close
  section(v-for=  "section, key in $data")
    h4 {{ String(key).toUpperCase() }}

    div(v-for=  "category in Object.keys(section)")
      h5 {{ category.charAt(0).toUpperCase() + category.slice(1) }}

      ul
        li(v-for= "ceva in Object.keys(section[category])")
          label(v-if="ceva !== 'select'") {{ ceva }}
          select(v-else)
            option(v-for="option in section[category][ceva]") {{ option }}

button#gconfigOpen(
  v-else,
  @click  = "toggleConfig"
) Open config
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const colorThemes = {
  default: 'Default',
  hippie: 'Hippie',
  healthy: 'Healthy'
}

export default {
  data () {
    return {
      appearance: {
        palette: {
          select: {
            ...colorThemes
          }
        },
        spacings: {},
        typography: {},
        layout: {
          header: {},
          content: {},
          footer: {}
        },
      }
    }
  },
  methods: {
    ...mapActions({
      'toggleConfig': 'configurator/toggle'
    })
  },
  computed: {
    ...mapGetters({
      'cfgOpen': 'configurator/open',
    })
  }
}
</script>

<style lang="stylus">
#gconfig
  position fixed
  top 0
  bottom 0
  right 0
  background #fafafa
  padding 20px
  min-width 300px

  +above(l)
    padding 40px

  &Open
    position fixed
    background yellow
    top 200px
    right 0
</style>
