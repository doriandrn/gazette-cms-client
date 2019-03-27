<template lang="pug">
.container__inner.main(:class="{ sidebar: $slots.sidebar }")
  h1 index page yoyo

  main
    ul.grid(data-grid="index1")
      articleCard(
        v-for=    "article in content.articles"
        :key=     "article.title"
        :title=   "article.title"
        :category="article.category"
        :featured="article.featured"
      )

      widget(
        v-if=  "cfg.widgets.topStories"
        title= "top stories"
      )
        list(ordered)
          article-card(
            v-for=      "story in topStories",
            :class=     "{ featured: story.featured }"
            :key=       "story.title"
            :title=     "story.title"
            :category = "story.category"
            :authors=   "story.authors"
          )

  aside(v-if="$slots.sidebar")
    slot(name="sidebar")
</template>

<script>
import homeData from 'data/homepage'

import list from 'UI/list'
import widget from 'UI/widget'
import articleCard from 'UI/articleCard'

import userConfig from '../userConfig'
const { homepage } = userConfig.layout

export default {
  data () {
    return {
      ...homeData,
      cfg: { ...homepage }
    }
  },
  components: {
    list,
    widget,
    articleCard
  }
}
</script>

<style lang="stylus">
main
  > ul
    list-style-type none
    padding 0
</style>
