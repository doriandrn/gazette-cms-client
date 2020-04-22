<template lang="pug">
article.article
  featured(:src="featured.src" v-if="featured")

  .article__head
    .article__meta
      navbar.topics(:items="topics")
      span 3min

    rating(:value="rating" v-if="rating")

    h1 {{ title }}
    p.subtitle {{ subtitle }}

  .article__content(v-html=  "content")

  sction.authors(v-if="authors")
    h2 Brought to you by
    ul(v-if="authors.length")
      user-card(v-for="author in authors" :key="author.id" :author="author")

  sction.article__footer.ui
    h2 Reactions
    ul.comments
      comment(
        v-for=    "comment in comments",
        :key=     "comments.indexOf(comment)",
        :id=      "comment.id || Object.keys(comments).indexOf(comment.id)",
        :comment= "comment.comment",
        :author=  "comment.author",
        :title=   "comment.title",
        :replies= "comment.replies",

        :byAuthor= "comment.author",
        :userComment = "authenticatedUserId === comment.author.id"
      )

  sction
    h2 Related
</template>

<script>
import featured from 'c/contentFeatured'
import navbar from 'UI/navbars/default'
import comment from 'c/comment'
import rating from 'c/rating'
import userCard from 'c/UserCard'
import sction from 'c/UI/section'

export default {
  components: {
    navbar,
    comment,
    featured,
    rating,
    userCard,
    sction
  },
  async asyncData ({ params, $axios }) {
    const { slug } = params
    try {
      const { data } = await $axios.get(`api/content/${slug}`)
      return data
    } catch (e) {
      console.error('Eroare la cerere de articol:', e)
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

  .authors
    ul
      list-style none
      padding 0

      li
        display flex
        flex-flow row nowrap
        align-items center

        &:not(:first-child)
          margin-top 12px

        .user__avatar
          margin-right 12px

  &__head
    > *:not(:first-child)
      margin-top 32px

  &__meta
    display flex
    flex-flow row nowrap

    span
      display inline-block
      vertical-align baseline
      font-family: fonts.ui
      margin-left auto
      font-size 10px
      color: #666

  &__featured
    margin 0 -21px 12px
    width calc(100% + 42px + 2px)

    +above(l)
      float: left;
      width auto
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

.topics
  > ul > li
    &:not(:first-child)
      margin-left 4px
  a
    border-radius: 2px;
    padding: 6px 10px;
    color: #666;
    font-size: 12px;
    border: 1px solid rgba(black, .05);

commentList()
  list-style none
  padding 0
  flex 0 0 100%

.comments
  commentList()
  width 100%
  max-width 640px
  margin 0 auto

  .user
    flex 0 0 100%

    > p
      font-size 11px
      line-height 24px
      display flex

      a
        margin-right 12px
        padding-right 12px


  // more
  .show
    width 100%
    background gray

  .reply
    margin-top 20px

  h5
    margin-top 8px

  ul
    commentList()
    margin-left 10px

    h5
      font-size 12px
      color #aaa

  .meta
    margin-left auto

  li
    display flex
    flex-flow row wrap
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
      line-height 18px
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
        background-size 12px

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
