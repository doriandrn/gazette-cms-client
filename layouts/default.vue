<template lang="pug">
.container(:class="{ 'configurator--open': cfgOpen }")
  header.header.ui
    .container__inner
      logo

  hero(v-if=  "$route.path === '/'")

  nuxt

  //- footer
  //-   p copyshit

  configurator(v-if="cfgEnabled" role="configuration")

  main-nav.main(:items="navigation" :icons="true" role="navigation")
    form.your-comment(v-if="activeAction === 'comment'")
      textarea(placeholder="Your comment" style="height: auto")
      button(type="submit" value="Post comment" data-icon="send")

    div.share(v-else-if="activeAction === 'share'")
      p share this shit

    form.search(v-else-if="activeAction === 'search'")
      input(type="search" v-focus="activeAction === 'search'")
</template>

<script>
import hero from 'c/hero'

import navbar from 'UI/navbars/default'
import mainNav from 'UI/navbars/main'
import actions from 'UI/actions'

import logo from 'c/logo'
import configurator from 'c/configurator'

import login from 'c/login'
import categories from 'data/categories'

import { mapGetters, mapActions } from 'vuex'

const config = {
  header: {
    size: 'small'
  }
}

export default {
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },
  head () {
    link: [
      {
        rel: "stylesheet",
        href: `/${this.cur}.css`
      }
    ]
  },
  data () {
    return {
      categories,
      config
    }
  },
  computed: {
    activePageType () {
      const { path } = this.$route
      if (path.indexOf('/profile/') === 0) {
        return 'profile'
      }
      return path.indexOf('/article/') === 0 ? 'single' : 'home'
    },
    navigation () {
      const { loggedIn } = this.$auth

      // Navigation Items
      const back = {
        back: 'Back'
      }
      const single = {
        share: 'Share'
      }
      const def = {
        trending: 'Trending',
        topics: 'Topics',
        search: 'Search'
      }
      const profile = {}

      if (loggedIn) {
        Object.assign(def, {
          favs: 'Favourites',
          profile: 'Profile'
        })

        Object.assign(profile, {
          follow: 'Follow',
          dm: 'Message'
        })

        Object.assign(single, {
          comment: 'Post a Comment',
          star: 'Review Article',
          bookmark: 'Bookmark',
        })
      } else {
        Object.assign(def, {
          auth: 'Authenticate'
        })
      }

      switch (this.activePageType) {
        case 'single':
          return Object.assign({}, { ...back }, single)

        case 'profile':
          return Object.assign({}, { ...back }, profile)

        default:
          return def
      }
    },
    ...mapGetters({
      'cfgOpen': 'configurator/open',
      'cfgEnabled': 'configurator/enabled',
      'activeAction': 'user/action'
    })
  },
  components: {
    hero,
    actions,
    navbar,
    logo,
    login,
    configurator,
    mainNav
  }
}
</script>

<style lang="stylus">
@require '~styles/base'
@require './themes/' + theme + '/grid'

nav.main
  position fixed
  bottom 0
  width 100%
  background #fafafa
  display: flex;
  flex-flow: column-reverse wrap;

  form
    padding-right 40px
    display flex

    &.your-comment
      display flex
      flex-flow row nowrap

      button
        margin-left 8px
        margin-top auto

    input
    textarea
      flex 1 1 100%

  .action
    padding 20px

  li
    flex 1 1 20%

  ul
    a
    button
      flex-flow row wrap
      align-items center
      justify-content center
      width 100%

      &:before
        margin-bottom 4px
        background-size 20px
        flex 1 1 100%

  > ul
    display flex
    flex-flow row nowrap
    font-size 12px
    text-align center

.black
  background black
  color white

  a
    color white

#__layout
  > .container
    height 100vh

.container
  width 100%
  max-width 100%
  overflow-x hidden
  display grid
  grid-template-areas '. header .'\
                      '. main .'\
                      '. aside .'\
                      '. video .'\
                      'footer footer footer'

  grid-template-columns: minmax(10px, 20px) 1fr minmax(10px, 20px);
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

  .logo
    margin 0 auto
    img
      max-height 36px

  .actions
    max-height 36px

  .container__inner
    padding: smalls.tb 0
    flex-direction row
    flex-wrap wrap

.page__head
  grid-area pageHead

main
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
