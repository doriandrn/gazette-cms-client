<template lang="pug">
li(:class="{ featured: featured }")
  nuxt-link(:to="url" v-if="img")
    img(:src="`images/${img}`")
  h3
    nuxt-link(:to="url") {{ title }}
  p.excerpt(v-if="excerpt") {{ excerpt }}

  slot

  .meta
    slot(name="meta")
    timedate(v-if="date", :unixTime=  "date")
</template>

<script>
import timedate from 'c/timedate'

export default {
  props: {
    id: {
      type: String
    },
    url: {
      type: String,
      default () { return `${this.taxonomy || 'article'}/${this.id || 'untitled'}`}
    },
    taxonomy: {
      type: String,
      default: 'article'
    },
    title: {
      type: String,
      default: () => `Untitled ${this.taxonomy || 'content'}`
    },
    date: {
      type: Number
    },
    excerpt: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    },
    authors: {
      type: Array
    },
    img: {
      type: String,
    },
    topics: {
      type: Array,
      default: () => [],
      // required: true
    }
  },

  components: {
    timedate
  }
}
</script>


<style lang="stylus">
.cards
  li
    &:not(:first-child)
      margin-top 20px

  a
    text-decoration none

  .excerpt
    font-size 14px
    line-height 20px
</style>
