<template lang="pug">
main#drafts
  h1 Your drafts

  ul.cards.ui(v-if= "drafts")
    card(
      v-if=     "draft[revisions[uid] - 1].content.blocks"
      v-for=    "draft, uid in drafts"
      :key=     "uid"
      taxonomy= "draft"
      :date=    "draft[revisions[uid] - 1].updatedAt"
      :title=   "draft[revisions[uid] - 1].content.blocks.filter(block => block.type === 'header')[0].data.text || 'Untitled'"
      :url=     "`draft/${uid}`"
    )
      //:excerpt = "draft[revisions[uid] - 1].excerpt || draft[revisions[uid] - 1].content.blocks.filter(block => block.type === 'paragraph')[0].data.text || null"
      //- span.slug.meta {{ draft[draft.length - 1].slug }}
      span.revisions(slot="meta") {{ revisions[uid] }} revisions
  p(v-else) No drafts

</template>

<script>
import card from 'c/UI/articleCard'

export default {
  name: 'localDraftsList',

  data () {
    if (!process.browser) return {}
    const drafts = JSON.parse(window.localStorage.getItem('drafts'))
    return { drafts }
  },

  computed: {
    revisions () {
      const { drafts } = this
      if (!drafts) return
      const revs = {}
      Object.keys(drafts).map(draft => { revs[draft] = drafts[draft].length })
      return revs
    }
  },

  components: {
    card
  }
}
</script>
