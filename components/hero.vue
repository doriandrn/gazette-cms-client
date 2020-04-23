<template lang="pug">
.hero
  .container__inner
    .hero__top(v-if="itemsTopCarousel.length")
      articleCard(
        v-for=  "item in itemsTopCarousel"
        :key=   "item.id"
      )

    .hero__main
      h1 hero
      p hero lol

    .hero__bottom
      p maybe ad or smth
</template>

<script>
import articleCard from 'UI/articleCard'

export default {
  props: {
    itemsTopCarousel: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    articleCard
  }
}
</script>

<style lang="stylus">
.hero
  grid-area pageHead
  background black
  color white
  flex 0 0 100%
</style>
