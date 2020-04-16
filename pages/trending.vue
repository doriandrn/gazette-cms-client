<template lang="pug">
main.trending
  h1 Trending
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    try {
      const { data } = await $axios.get('api/content/trending')
      return data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
