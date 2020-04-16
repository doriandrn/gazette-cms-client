<template lang="pug">
span.datetime(v-if="unixTime") {{ value }} ago
</template>

<script>
import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default {
  props: {
    unixTime: {
      type: Number
    }
  },
  computed: {
    interpreted () {
      return new Date(this.unixTime).toGMTString()
    },
    value () {
      try {
        return dayjs().from(dayjs(this.interpreted), true)
      } catch (e) {

      }
      return undefined
    }
  }
}
</script>
