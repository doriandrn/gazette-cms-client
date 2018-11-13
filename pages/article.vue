<template lang="pug">
article.article
  h1 {{ title }}
  h2.subtitle(v-if="subtitle") {{ subtitle }}

  .article__content
    p(v-for="p in content") {{ p }}

  .article__extra
    about-author
</template>

<script>
import aboutAuthor from 'c/social/aboutAuthor'
export default {
  data () {
    return {
      title: 'Nothing Can Replace Libraries (Yet)',
      subtitle: 'In the history of terrible ideas, Amazon replacing our libraries is one for the books',

      content: [
        `My keychain holds little plastic cards, one for each store I regularly visit and, now, a tiny library card, too.`,
        `I hadn’t visited my library in ages. I stopped reading hardcover books almost a decade ago, ceased checking out movies on VHS and then DVDs sometime during the Obama Administration and hadn’t cracked an encyclopedia since Outkast encouraged me to Shake it like a Polaroid picture.`,
        `For me, my local library had slipped into irrelevancy. And, yet, here I was, back at my local library asking if I could get a new library card.`,
        `If I’d read Forbes Contributor Panos Mourdoukoutas recent, muddled proposal “Amazon Should Replace Local Libraries to Save Taxpayers Money,” a few years ago I might’ve agreed with the sentiment, if not the structure, of his argument.`,
        `Libraries’ survival in the face of information technology upheaval has been a mystery to me. We have a world of information at our fingertips. We stream movies. The Dewey Decimal System, which I learned to use in my grade school’s library, is about as useful to current generations as a divining rod for finding books. Millennials and Gen Z-ers find whatever they need through natural language queries on a computer or, more likely, by speaking to a digital voice assistant on their iPhone, Android device, or Amazon Echo.`,
        `Still, I do have strong, sentimental library memories.`,
        `When I was young, my mother would walk me to the Queens Public Library to check out two or three children’s books. I invariably grabbed Dr. Seuss; I could never get enough of Bartholomew’s 500 Hats.`,
        `As a cash-strapped young adult, I still visited the library, hoping to score a copy of the latest Stephen King bestseller.`
      ],
      comments: [{}],
      meta: {
        tags: ['reading', 'blockchain', 'amazon'],
        authors: [
          {
            name: 'John doe'
          }
        ],
        translators: []
      }
    }
  },
  components: {
    aboutAuthor
  }
}
</script>

<style lang="stylus">
.article
  max-width 100%
  margin 0 auto

  h1
    margin-top 1vr

  +above(l)
    max-width 600px
</style>
