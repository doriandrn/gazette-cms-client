<template lang="pug">
main#new
  h1(v-if="newContent") Compose
  form#setup(v-if="newContent && editing")
    fieldset.selector
      select(v-model="taxonomy")
        option(v-for="tax in taxonomies" :value="tax" :selected="taxonomy === tax") {{ tax }}

    input#slug(type="text" placeholder="slug" v-model="slug")
    //- p permit comments
    //- p count views
    //- p visibility: ....
    //- p {{ rawContent }}

  #editor(:disabled="!editing")
  .statusbar
    span Rev. {{ revision }}
    span Draft autosaved!
    span.w {{ wordsCount }} words
    span {{ readTime.text }}
</template>

<script lang="ts">
import config from '~/gazette.config'

import uniqueSlug from 'unique-slug'
import readingTime from "reading-time"

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@editorjs/simple-image'
import Checklist from '@editorjs/checklist'
import Quote from '@editorjs/quote'
import Warning from '@editorjs/warning'
import Table from '@editorjs/table'
import Marker from '@editorjs/marker'
import InlineCode from '@editorjs/inline-code'
import Embed from '@editorjs/embed'
import Delimiter from '@editorjs/delimiter'
import CodeTool from '@editorjs/code'
import LinkTool from '@editorjs/link'

const { taxonomies } = config.client
let newRevision = false

export default {
  name: 'Compose',

  validate ({ params, query, store }) {
    const predefined = ['draft']
    return predefined.concat(taxonomies).indexOf(params.taxonomy) > -1
  },

  async asyncData ({ params, $axios }) {
    const { slug, taxonomy } = params // For drafts, the slug is the UID
    try {
      let data
      if (taxonomy !== 'draft') {
        data = await $axios.get(`api/content/${slug}`).data
        Object.assign(data, { newContent: false })
      } else {
        const drafts = JSON.parse(window.localStorage.getItem('drafts'))
        if (drafts && drafts[slug]) {
          const revision = drafts[slug].length - 1
          data = drafts[slug][revision]
          Object.assign(data, { revision })
        }
      }
      return data
    } catch (e) {
      console.error('Could not get content', e)
    }
  },

  data () {
    const taxonomy = taxonomies[0] // first is default
    return {
      langs: ['en', 'ro'],
      slug: '',
      uid: '',
      newContent: true,
      editing: true,
      revision: 0,
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
      if (!this.content.blocks) return ''
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
      const { uid, taxonomy, slug, content, revision } = this
      const updatedAt = new Date().toISOString()
      return { uid, taxonomy, slug, content, updatedAt, revision }
    },
    readTime () {
      return readingTime(this.rawContent)
    }
  },

  methods: {
    saveDraft (data) {
      if (!process.browser) return
      const { uid, draftData } = this
      console.info('Saving draft uid: ', uid)
      const drafts = JSON.parse(window.localStorage.getItem('drafts') || '{}')
      drafts[uid] = drafts[uid] || []
      if (newRevision) {
        drafts[uid].push({ ...draftData })
        newRevision = false
      } else {
        drafts[uid][drafts[uid].length - 1] = { ...draftData }
      }
      window.localStorage.setItem('drafts', JSON.stringify(drafts))
    }
  },

  created () {
    // for drafts.
    if (!this.uid.length) this.uid = uniqueSlug()
    newRevision = this.editing

    // the editor
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      onChange: async () => {
        const { blocks } = await editor.save()

        this.content.blocks = blocks
        this.slug = this
          .slugify(blocks.filter(block => block.type === 'header')[0].data.text)
          .replace(/nbsp-/g, '')

        if (newRevision) this.revision += 1
        this.saveDraft(this.draftData)
      },
      placeholder: 'Let`s write an awesome story!',
      autofocus: true,
      data: this.content,
      holderId: 'editor',
      initialBlock: 'header',
      tools: {
        /**
         * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
         */
        header: {
          class: Header,
          inlineToolbar: ['link'],
          config: {
            placeholder: 'Header'
          },
          shortcut: 'CMD+SHIFT+H'
        },

        /**
         * Or pass class directly without any configuration
         */
        image: SimpleImage,

        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L'
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },

        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
          shortcut: 'CMD+SHIFT+O'
        },

        warning: Warning,

        marker: {
          class:  Marker,
          shortcut: 'CMD+SHIFT+M'
        },

        code: {
          class:  CodeTool,
          shortcut: 'CMD+SHIFT+C'
        },

        delimiter: Delimiter,

        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C'
        },

        linkTool: LinkTool,

        embed: Embed,

        table: {
          class: Table,
          inlineToolbar: true,
          shortcut: 'CMD+ALT+T'
        },

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
  position fixed
  background: #eee;
  bottom: 56px;
  z-index: 3;
  left: 0;
  right: 0;
  padding: 0 20px;
  display: flex;
  flex-flow: row nowrap;

  > span
    &:not(:last-child)
      margin-right 12px
    &.w
      margin-left auto
</style>
