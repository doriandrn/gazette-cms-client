<template lang="pug">
li(:class="{ featured: featured }")
  nuxt-link(:to="url" v-if="img")
    img(:src="`images/${img}`")
  h3
    nuxt-link(:to="url") {{ title }}
</template>

<script>
export default {
  props: {
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
      default: 'Unnamed post'
    },
    featured: {
      type: Boolean,
      default: false
    },
    authorsIds: {
      type: Array,
      default: () => [1, 2]
    },
    img: {
      type: String,
    },
    category: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>
