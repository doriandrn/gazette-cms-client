<template lang="pug">
form
  field(
    v-for=  "field, id in fields"
    :type=  "field.type"
    :key=   "id"
    :id=    "id"
    :label= "id"
    :v=     "field.v"
  )

  field(
    type= "submit"
  )
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'

import field from 'c/field'

@Component({
  components: {
    field
  },
  props: {
    fields: {
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
})
export default class Form extends Vue {

}
</script>
