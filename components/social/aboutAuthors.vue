<template lang="pug">
.author__about
  h3(v-if="displayTitle") About the author(s)
  list
    user-card(
      v-for=    "author in authors"
      :key=     "author"
      :author=  "getUserData(author)"
    )
</template>

<script>
import UserCard from 'c/UserCard'
import list from 'c/UI/list'

export default {
  components: {
    UserCard,
    list
  },
  methods: {
    getUserData (authorId) {
      return {
        name: 'John Doe',
        bio: 'Cool author',
        role: 'Editor'
      }
    }
  },
  props: {
    displayTitle: {
      type: Boolean,
      default: true
    },
    authors: {
      type: Array,
      default: () => [1, 2]
    }
  }
}
</script>
