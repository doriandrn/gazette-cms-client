<template lang="pug">
.container
  headr.header.ui
    login(
      slot=   "top"
      v-if=   "!$auth.$state.loggedIn"
    )
    p(
      slot=   "top"
      v-else
    ) logat

    logo
    navbar(:items="categories")

  nuxt

  footer
    p copyshit

  configurator
</template>

<script>
import headr from 'c/header'
import navbar from 'UI/navbars/default'

import logo from 'c/logo'
import configurator from 'c/configurator'

import login from 'c/login'

import categories from 'data/categories'

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
  components: {
    headr,
    navbar,
    logo,
    login,
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

.container
  width 100%
  display grid
  grid-template-areas 'header header header'\
                      'pageHead pageHead pageHead'\
                      '. main .'\
                      '. aside .'\
                      '. video .'\
                      'footer footer footer'

  grid-template-columns: minmax(10px, 2%) 1fr minmax(10px, 2%);
  grid-template-rows: 100px minmax(30px, auto) 1fr minmax(100px, auto) auto minmax(80px, auto);
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

  .container__inner
    padding: smalls.tb 0

  margin-bottom: smalls.elementsV * 3

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
  &__bottom
    *
      margin-bottom 0

#gconfig
  position fixed
  right 0
  top 20%

</style>
