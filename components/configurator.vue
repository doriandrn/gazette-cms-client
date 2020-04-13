<template lang="pug">
#gconfig(v-if="cfgOpen")
  span.close(@click  = "toggleConfig") close
  section(v-for=  "section, key in $data")
    h4 {{ String(key).toUpperCase() }}

    div(v-for=  "category in Object.keys(section)")
      h5 {{ category.charAt(0).toUpperCase() + category.slice(1) }}

      ul
        li(v-for= "configOption in Object.keys(section[category])")
          field(
            v-if    ="section[category][configOption].type !== undefined"
            :id     ="configOption"
            :options= "{}"
          )

button#gconfigOpen(
  v-else,
  data-icon="config"
  @click  = "toggleConfig"
) Open config
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import config from '../userConfig'
import field from 'c/field'

export default {
  data () {
    return config
  },
  components: {
    field
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
    font-size 0
    position fixed
    background: rgba(black, .05);
    top: -16px;
    padding: 16px;
    right: -16px;
    border-radius: 50px;
</style>
