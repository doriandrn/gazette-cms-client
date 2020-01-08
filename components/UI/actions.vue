<template lang="pug">
.actions
  slot
</template>

<style lang="stylus">
itemMargin = 4px

.actions
  display flex
  margin: 0 -(itemMargin)

  > *
    margin: 0 itemMargin
</style>
