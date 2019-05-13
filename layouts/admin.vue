<template lang="pug">
.admin
  nav
    nuxt-link(
      v-for=  "section in sections"
      :key=   "section"
      :to=    "`admin/${section}`"
    ) {{ section }}
  main

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import AuthMixin from '~/mixins/auth'

const sections = [
  'categories',
  'taxes',
  'content',
  'appearance',
  'modules',
  'users'
]

@Component({
  middleware: ['auth'],
  mixins: [AuthMixin]
})
export default class GazetteAdminLayout extends Vue {
  data () {
    return {
      sections
    }
  }
}
</script>

<style lang="stylus">
.admin
  display grid
</style>
