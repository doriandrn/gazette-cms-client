<template lang="pug">
form(
  @submit.prevent = "validateF"
  :data-vv-scope=   "name"
)
  fieldset
    field(
      v-for=  "field, id in fields_"
      :context= "name"
      :type=  "field.type"
      :key=   "id"
      :id=    "id"
      :label= "id"
      :v=     "field.v"

      :data-vv-scope=  "name"
      :data-vv-as=    "field.label"
      :data-vv-name=  "id"

      v-model=  "$data[id]"
    )

  field(
    type= "submit"
    :context= "name"
    :disabled = "errors.any(name)"
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
})
export default class Form extends Vue {
  data () {
    const data = {}
    Object.keys(this.fields_).map(f => { data[f] = undefined } )
    return data
  }

  validateF () {
    this.$validator.validateAll(this.name).then((result) => {
      if (result) {
        console.log('all good')
      }
    });
  }
}
</script>
