<template lang="pug">
main#new
  h1 Compose
  fieldset.selector
    select(v-model="taxonomy")
      option(v-for="tax in taxonomies" :value="tax" :selected="taxonomy === tax") {{ tax }}

    input#slug(type="text" placeholder="slug" v-model="slug")



  #editor
  #config
    //- p permit comments
    //- p count views
    //- p visibility: ....
    //- p {{ rawContent }}
  .statusbar Revision: 0; draft autosaved! {{ wordsCount }}W < 1min, lang etc
</template>

<script lang="ts">
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import config from '../gazette.config'
import uniqueSlug from 'unique-slug'

const { taxonomies } = config.client

export default {
  name: 'Compose',
  // async asyncData ({ params, $axios }) {
  //   return {}
  // },
  data () {
    const taxonomy = taxonomies[0] // first is default
    return {
      langs: ['en', 'ro'],
      slug: '',
      uid: '',
      taxonomy,
      content: {
        blocks: []
      }
    }
  },
  head () {
    return {
      title: this.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Gazette Content Composer' }
      ]
    }
  },
  computed: {
    rawContent () {
      return unescape(this.content.blocks.map(block => block.data.text).join(' '))
    },
    taxonomies () {
      return taxonomies
    },
    wordsCount () {
      return this.rawContent.split(' ').length
    },
    placeholder () {
      switch (this.taxonomy) {
        default:
          return 'Let`s write an awesome story!'

        case 'product':
          return 'Let`s define a new vision!'

      }
    },
    publishData () {
      return {}
    },
    draftData () {
      const { uid, taxonomy, slug, content } = this
      const updatedAt = new Date().toISOString()
      return { uid, taxonomy, slug, content, updatedAt }
    }
  },
  methods: {
    saveDraft (data) {
      if (!process.browser) return
      const { uid } = this
      console.info('Saving draft uid: ', uid)
      const drafts = JSON.parse(window.localStorage.getItem('drafts') || '{}')
      drafts[uid] = drafts[uid] || []
      drafts[uid].push(this.draftData)
      window.localStorage.setItem('drafts', JSON.stringify(drafts))
    }
  },
  created () {
    // for drafts.
    this.uid = uniqueSlug()

    // the editor
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      onChange: async () => {
        const { blocks } = await editor.save()

        this.content.blocks = blocks
        this.slug = this
          .slugify(blocks[0].data.text)
          .replace(/nbsp-/g, '')

        this.saveDraft(this.draftData)
      },
      placeholder: 'Let`s write an awesome story!',
      autofocus: true,
      holderId: 'editor',
      tools: {
        header: Header,
        list: List
      },
    });
  }
}
</script>

<style lang="stylus" scoped>
.selector
  select
    width 100%

main > h1
  text-align center

input#slug
  padding 2px 4px
  border-radius 4px
  width 100%

#editor
  margin-top 32px

.statusbar
  font-size 10px
  white-space nowrap
</style>
