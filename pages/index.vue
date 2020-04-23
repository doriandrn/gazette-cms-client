<template lang="pug">
main(:class="{ sidebar: $slots.sidebar }")

  hero(v-if=  "$route.path === '/'")

  h4 In the spotlight

  ul.cards(v-if="content")
    articleCard(
      v-if=     'content.articles'
      v-for=    "article in content.articles"
      :key=     "article.title"
      :title=   "article.title"
      :category="article.category"
      :featured="article.featured"
      :img= "article.img"
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
import list from 'UI/list'
import widget from 'UI/widget'
import articleCard from 'UI/articleCard'

import hero from 'c/hero'

export default {
  name: 'homepage',

  async asyncData ({ params, $axios }) {
    try {
      const { data } = await $axios.get('/api')
      return data
    } catch (e) {
      console.error('No resp', e)
    }
  },

  components: {
    list,
    hero,
    widget,
    articleCard
  }
}
</script>

<style lang="stylus">
main
  display flex
  flex-flow row wrap

  > *
    flex 1 1 100%

  > ul
    list-style-type none
    padding 0
</style>
