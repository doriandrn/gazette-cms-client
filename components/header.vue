<template lang="pug">
header
  slot(name="beforeHeader")
  .container__inner
    .header__top
      slot(name="top")
    slot
  slot(name="afterHeader")
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

export default class Form extends Vue {

}
</script>
