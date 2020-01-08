<template lang="pug">
form
  fieldset
    field(
      v-for=  "field, id in fields_"
      :name=  "id"
      :type=  "field.type"
      :key=   "id"
      :id=    "id"
      :label= "id"

      v-model=  "$data[id]"
    )

  input(
    type= "submit"
  )
</template>

<script lang="ts">
// import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

import field from 'c/field'

export default {
  data () {
    const data = {}
    Object.keys(this.fields_).map(f => { data[f] = undefined } )
    return data
  },
  components: {
    field
  },
  props: {
    name: {
      type: String,
      default: 'unnamed'
    },
    fields_: {
      type: Object,
      default () {
        return {
          username: {
            type: 'text',
            v: 'required'
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus">
form
  input[type="submit"]
    margin-top 16px

  label
    line-height 20px
    margin-bottom 4px
  ul
    > li
      padding 0

  > fieldset
    > div
      &+div
        margin-top 8px
</style>
