<template lang="pug">
figure.article__featured(v-if="src")
  img(
    :src="`/images/${src}`"
    v-if="type && type === 'image'"
    :alt="caption"
  )
  figcaption(v-if="type === 'image' && caption") {{ caption }}

</template>

<script>
const ytEmbedCode = url => `<iframe width="100%" height="auto" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

export default {
  props: {
    src: {
      type: [String, Array]
    },
    caption: {
      type: String
    }
  },
  computed: {
    type () {
      if (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(this.src)) {
        return 'image'
      } else {
        return 'unknown'
      }
    }
  }
}
</script>
