<template lang="pug">
article.article
  .article__meta
    span 3min
    span review
    span authors

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
    p.subtitle(v-if="subtitle") {{ subtitle }}

  .article__content
    p(v-for="p in content") {{ p }}

  .article__footer
    //- about-authors.article__authors(
    //-   :authors = "content.authors"
    //- )
    section.ui
      h2 Comments
      ul.comments
        comment(
          v-for=    "comment in comments",
          :key=     "comments.indexOf(comment)",
          :id=      "comment.id || Object.keys(comments).indexOf(comment.id)",
          :comment= "comment.comment",
          :author=  "comment.author",
          :title=   "comment.title",
          :replies= "comment.replies",

          :byAuthor= "commentByAuthor(comment.author.id)"
        )
</template>

<script>
import aboutAuthors from 'c/social/aboutAuthors'
import comment from 'c/comment'

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
      comments: [
        {
          id: 'comment-1',
          comment: 'This is a demo comment',
          title: 'I like this!',
          author: {
            id: '4',
            name: 'Miguel Jackson',
            avatar: 'miguel'
          },
          date: 'Sep 23, 2017 13:22',
          replies: [{
            id: 'reply-1',
            comment: 'Yeah, indeed!',
            title: 'Agree',
            date: 'Mar 23, 2017 11:22',
            author: {
              id: '2',
              name: 'Jack Richardson',
              avatar: 'jack'
            }
          }]
        },
        {
          id: 'long-comment',
          title: 'Long comment',
          date: 'Mar 23, 2017 11:22',
          comment: 'Mauris non pulvinar nisi. Vivamus cursus aliquam leo, non pretium nulla consectetur id. Duis dapibus vestibulum quam, ut placerat nulla ornare in. Vestibulum molestie scelerisque ligula vitae efficitur.',
          author: {
            id: '1',
            name: 'Miguel Jackson',
            avatar: 'miguel'
          },
          replies: [{
            id: 'reply-1',
            comment: 'Yeah, indeed!',
            title: 'Agree',
            date: 'Mar 23, 2017 11:22',
            author: {
              id: '2',
              name: 'Jack Richardson',
              avatar: 'jack'
            }
          },
          {
            id: 'reply-2',
            comment: 'Yeah, indeed!',
            title: 'Agree',
            date: 'Mar 23, 2017 11:22',
            author: {
              id: '2',
              name: 'Jack Richardson',
              avatar: 'jack'
            }
          }]
        }
      ],
      tags: ['reading', 'blockchain', 'amazon'],
      authors: [
        {
          "id": "1",
          "name": "Anne Gentle",
          "bio": "Product manager at Cisco"
        },
        {
          "id": "0",
          "name": "Dorian Tudorache",
          "bio": "CEO @ Internet"
        }
      ],
      translators: [],
      reviews: []
    }
  },
  components: {
    aboutAuthors,
    comment
  },
  computed: {
    commentByAuthor () {
      const { authors } = this
      return id => authors.map(a => a.id).indexOf(id) > -1
    }
  }
}
</script>

<style lang="stylus">
@require '~styles/base'

.article
  grid-area main

  +above(m)
    max-width 90%
    margin 0 auto

  h1
    margin-top 20px

  &__meta
    text-align center

    span
      font-family: fonts.ui
      margin 0 16px
      font-size 10px
      text-transform uppercase
      letter-spacing 1px
      color: #666

  &__featured
    +above(l)
      float: left;
      margin-right: 64px;
      margin-bottom: 64px;

      img
        max-height 30vh

  &__content
    clear both
    margin 0 auto
    max-width 100%

    +above(l)
      max-width 600px

borderColor = rgba(black, .05)

commentList()
  list-style none
  padding 0
  flex 0 0 100%

.comments
  commentList()
  width 100%
  max-width 640px
  margin 0 auto

  // more
  .show
    width 100%
    background gray

  .reply
    margin-top 20px

  h5
    margin-bottom 8px

  ul
    commentList()
    margin-left -40px

    h5
      font-size 12px
      color #aaa

  .meta
    margin-left auto

  li
    display flex
    flex-flow row nowrap
    position relative
    margin-top 16px
    margin-bottom 16px
    padding-left 0
    padding-right 0

    &:last-child
      margin-bottom 0
      padding-bottom 0

    p
      font-size 14px
      line-height 24px
      font-weight normal

      &:last-of-type
        margin-bottom 0

    button
    .button
      font-size 10px
      text-transform uppercase
      line-height 12px
      white-space nowrap
      padding 8px 12px
      border-radius 55px
      background-color: #fafafa

      &:before
        opacity .55

      &:hover
        color initial

      &.liked
        color red

      &.edit
        position absolute
        // top 8px
        // right 8px
        // size 36px
        // text-align center
        // background-color: colors.ui.bgs.media
        // background-image: embedurl(paths.icons + '/ui/edit.svg')
        // background-position 50% 50%
        // background-repeat no-repeat
        // background-size 11px
        // border-radius 50%
        // white-space normal
        // font-size 0

        +above(m)
          position static
          size auto
          text-align left
          background transparent
          white-space nowrap
          font-size 10px


    &__info
      margin-bottom 16px

    &__form
      position relative
      margin-bottom 32px

      .form
        &__row
          margin-bottom 16px

          &:last-child
            margin-bottom 0

      .unregistered
        padding 32px
        display block
        position absolute 0
        z-index 3
        opacity 0
        visibility hidden
        background rgba(white, .95)
        border: 1px solid borderColor
        transition opacity .15s ease-in-out

      &:hover
        .unregistered
          opacity 1
          visibility visible

      &+.heading__container
        .heading
          white-space nowrap

    &__avatar
      size 40px
      float left
      margin 0 16px 0 0

    &__title
      margin-bottom 8px
      margin-top 0

      > a
        margin-right 8px

      .popper
        padding 0
        opacity 0
        visibility hidden

        +above(l)
          min-width 400px

        .avatar
          display none

        .comment
          margin-bottom 0

      &:hover
        .popper
          opacity 1
          visibility visible

</style>
