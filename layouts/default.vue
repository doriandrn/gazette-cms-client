<template lang="pug">
.container
  header.header.ui.black
    .container__inner
      .header__top
        nuxt-link.logo(to="/")
          h1 Gazette
      navbar(:items="categories")

  nuxt

  footer
    p copyshit
</template>

<script>
import headr from 'UI/headers/default'
import navbar from 'UI/navbars/default'

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
  computed: {
    mainNav () {
      return { ...this.categories.map(cat => ({ [cat.uri || cat.name]: cat })) }
    }
  },
  components: {
    headr,
    navbar
  }
}
</script>

<style lang="stylus">
@require '~styles/config'
@require './themes/' + theme + '/grid'

a
  &:hover
    color yellow !important

.black
  background black
  color white

  a
    color white

.container
  width 100%
  display grid

  // /* four columns for grid areas  */
  // grid-template-columns 1fr 1fr 1fr 1fr

  // /* three rows for grid areas  */
  // grid-template-rows 4fr 80fr 2fr

  // /* grid areas setup; LOVE This ease of use!  */
  // grid-template-areas 'header header header header'\
  //                     'main main main main'\
  //                     'nav footer footer footer'

  // grid-gap 10vmin

  grid-template-areas: 'header header header' 'pageHead pageHead pageHead' '. main .' '. aside .' '. video .' 'footer footer footer';
  grid-template-columns: minmax(10px, 2%) 1fr minmax(10px, 2%);
  grid-template-rows: 100px minmax(30px, auto) 1fr minmax(100px, auto) auto minmax(80px, auto);
  grid-row-gap: 1px;
  grid-column-gap: 1px;

  &__inner
    margin 0 auto
    max-width: container.width
    width 100%
    display flex
    flex-flow column nowrap
    align-items center

header
  grid-area header

.page__head
  grid-area pageHead

main
  grid-area main

footer
  grid-area footer

.container
  > header
    display flex
    flex-flow row nowrap

    nav
      margin-top auto

  > main
    display grid
    -ms-flex-pack end
    grid-template-columns repeat(6 , 1fr)
    grid-template-rows auto repeat(2 , minmax(auto, 200px)) auto
    grid-template-areas 'featured featured featured featured narrow narrow' 'small-1 small-1 small-1 tall tall tall' 'small-2 small-2 small-2 tall tall tall' 'full full full full full full';
    grid-row-gap 16px
    grid-column-gap 16px
    justify-items flex-start
    justify-content flex-end
    align-content: flex-start

    .featured
      grid-area featured

.header
  &__top
  &__bottom
    *
      margin-bottom 0

</style>
