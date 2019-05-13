<template lang="pug">
header.header.ui
  slot(name="beforeHeader")
  .container__inner
    .header__top
      slot(name="top")
    slot
  slot(name="afterHeader")
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'

export default class Form extends Vue {

}
</script>
