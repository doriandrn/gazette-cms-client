<template lang="pug">
article.article
  .article__head(:data-layout="config.layout.head")
    figure.article__featured(
      v-if= "featured"
    )
      img(
        :src= "`images/${featured.src}`"
        v-if= "featured.type === 'image'"
        :alt= "featured.caption"
      )
      figcaption {{ featured.caption }}
    h1 {{ title }}
    h2.subtitle(v-if="subtitle") {{ subtitle }}

  .article__content
    p(v-for="p in content") {{ p }}

  .article__footer
    about-authors.article__authors(
      :authors = "content.authors"
    )

    comments(:data="content.comments")
</template>

<script>
import aboutAuthors from 'c/social/aboutAuthors'

export default {
  data () {
    return {
      config: {
        layout: {
          head: 'split-2-thumb-right'
        },
      },

      featured: {
        type: 'image',
        src: 'pozica.jpg',
        caption: 'Mega random picture taken by someone sometime'
      },

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
        `As a cash-strapped young adult , I still visited the library, hoping to score a copy of the latest Stephen King bestseller.`
      ],
      comments: [{}],
      tags: ['reading', 'blockchain', 'amazon'],
      authors: [
        {
          "name": "Anne Gentle",
          "bio": "Product manager at Cisco"
        },
        {
          "name": "Dorian Tudorache",
          "bio": "CEO @ Internet"
        }
      ],
      translators: [],
      reviews: []
    }
  },
  components: {
    aboutAuthors
  }
}
</script>

<style lang="stylus">
.article
  max-width 100%
  margin 0 auto
  grid-area main

  h1
    margin-top 1vr

  &__content
    +above(l)
      max-width 600px
</style>
