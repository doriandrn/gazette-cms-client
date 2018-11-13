<template lang="pug">
main.home
  h1 index page yoyo

  articleCard(
    v-for=  "article in content.articles"
    :article="article"
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
