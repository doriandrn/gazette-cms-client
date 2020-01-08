<template lang="pug">
.container(:class="{ 'configurator--open': cfgOpen }")
  buton.burger(icon="burger", title="Toggle mobile navigation")
    span
    span
    span

  headr.header.ui
    logo(slot="top")

    navbar(:items="categories")

    actions(slot="top")
      input(type="search")

      buton connect
        login(
          slot="dropdown"
          v-if=   "!$auth.$state.loggedIn"
        )
      buton notifications

  hero

  nuxt
  footer
    p copyshit

  configurator(v-if="cfgEnabled")
</template>

<script>
import headr from 'c/header'
import hero from 'c/hero'

import navbar from 'UI/navbars/default'
import actions from 'UI/actions'

import logo from 'c/logo'
import configurator from 'c/configurator'

import login from 'c/login'
import buton from 'c/button'
import categories from 'data/categories'

import { mapGetters, mapActions } from 'vuex'

const config = {
  header: {
    size: 'small'
  }
}

export default {
  data () {
    return {
      categories,
      config
    }
  },
  computed: {
    ...mapGetters({
      'cfgOpen': 'configurator/open',
      'cfgEnabled': 'configurator/enabled'
    })
  },
  components: {
    hero,
    actions,
    headr,
    navbar,
    logo,
    login,
    buton,
    configurator
  }
}
</script>

<style lang="stylus">
@require '~styles/base'
@require './themes/' + theme + '/grid'

.black
  background black
  color white

  a
    color white

.burger
  position absolute
  size 40px

.container
  width 100%
  max-width 100%
  overflow-x hidden
  display grid
  grid-template-areas 'header header header'\
                      'pageHead pageHead pageHead'\
                      '. main .'\
                      '. aside .'\
                      '. video .'\
                      'footer footer footer'

  grid-template-columns: minmax(10px, 2%) 1fr minmax(10px, 2%);
  grid-template-rows: 170px minmax(30px, auto) 1fr minmax(100px, auto) auto minmax(80px, auto);
  grid-row-gap 1px
  grid-column-gap 1px

  &.sidebar
    +above(xl)
      grid-template-areas 'header header header header'\
                          'pageHead pageHead pageHead pageHead'\
                          '. main aside .'\
                          '. video video .'\
                          'footer footer footer footer'
      grid-template-columns: minmax(10px, .5%) 4fr minmax(160px, 1fr) minmax(10px, .5%);
      grid-template-rows: repeat(2 , minmax(100px, auto)) auto 1fr minmax(60px, auto);
      grid-column-gap 16px
      align-content: flex-start
      align-items: flex-start

    +desktop()
      grid-template-columns minmax(10px, .5%) 4fr minmax(300px, 1fr) minmax(10px, .5%)

  &__inner
    margin 0 auto
    max-width: container.width
    width 100%
    display flex
    flex-flow column nowrap
    align-items center

header
  grid-area header

  .actions
    max-height 36px

  .container__inner
    padding: smalls.tb 0
    flex-direction row
    flex-wrap wrap

  nav
    background black
    color white
    padding 4px 16px
    width 100%

    ul
      justify-content center

    a
      color white

.page__head
  grid-area pageHead

.main
  grid-area main

footer
  grid-area footer

aside
  grid-area aside

.container
  > header
    display flex
    flex-flow row nowrap

    nav
      margin-top auto

.header
  &__top
    flex 0 0 100%
    display flex
    flex-flow row nowrap
    justify-content space-between

  &__top
  &__bottom
    *
      margin-bottom 0

</style>
