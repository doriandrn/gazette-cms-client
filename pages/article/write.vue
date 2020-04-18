<template lang="pug">
main#new
  h1 write

  #editor
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'

export default {
  created () {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holderId: 'editor',
      tools: {
        header: Header,
        list: List
      },
    });
  }
}
</script>
