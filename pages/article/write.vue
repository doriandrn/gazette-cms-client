<template lang="pug">
main#new
  h1 write
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
import config from '../../gazette.config'

const { taxonomies } = config.client

export default {
  name: 'Compose',
  data () {
    const taxonomy = taxonomies[0] // first is default
    return {
      langs: ['en', 'ro'],
      slug: '',
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
    }
  },
  created () {
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
