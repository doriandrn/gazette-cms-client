<template lang="pug">
form(
  @submit.prevent = "validateForm(name)"
)
  fieldset
    field(
      v-for=  "field, id in fields_"
      :name=  "id"
      :type=  "field.type"
      :key=   "id"
      :id=    "id"
      :label= "id"
      :v=     "field.v"
      :error= "errors.first(id, name)"

      v-validate= "`${field.v}`"

      :data-vv-scope=  "name"
      :data-vv-as=    "field.label"

      v-model=  "$data[id]"
    )

  input(
    type= "submit"
    :disabled = "errors.any(name) || !allFieldsHaveValues"
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

  validateForm (scope) {
    this.$validator.validateAll(scope).then((result) => {
      if (result) {
        console.log('all good', result)
      }
    });
  }

  get allFieldsHaveValues () {
    let hv = true
    for (const item in Object.keys(this.$data)) {
      if (this[item] === '') hv = false
      console.log(this[item])
    }
    console.log('hv', hv)
    return hv
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
