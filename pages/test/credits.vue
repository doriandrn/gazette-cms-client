<template lang="pug">
#credits
  h1 Credits
  p.intro We, at Numina, we'd like to thank everyone for making this project possible, and here's a long list of authors that demand our best wishes!

  .credit(v-for="credit in credits")
    h2 [{ credit.for }]
    ul(v-if="credit.items")
      li(v-for="item in credit.items")
        a(:href="item.url") {{ item.title }}
        span(v-if="item.authors")
          a(
            v-for="author in item.authors"
            :href= "author.url"
          ) {{ author.name }}
        a(href="https://dribbble.com/andrewdsn") Andrew
</template>

<script>
export default {
  data () {
    return {
      credits: [
        {
          for: 'Icons',
          items: [
            {
              title: 'Icons Library for Figma users',
              url: 'https://dribbble.com/shots/8936591-Icons-Library-for-Figma-users',
              authors: [
                {
                  name: 'Andrew',
                  url: 'https://dribbble.com/andrewdsn'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
