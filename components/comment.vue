<template lang="pug">
li(:class="{ byAuthor, userComment }")
  user(:data= "author")

  .comment__content
    span.meta {{ date }}

    h5 {{ title }}
    p {{ comment }}

    .comment__actions(v-if="!replyingToThis")
      .comment__reply
        close
        textarea(placeholder="your opinion")
        span Markdown supported.
      button like
      button(@click="replyToComment(id)") reply

    form.reply(v-else)
      textarea

    ul(v-if=     "replies && replies.length")
      button.more(
        v-if="!repliesOpen"
        @click="repliesOpen = !repliesOpen"
      ) {{ replies.length }} {{ replies.length === 1 ? 'reply' : 'replies' }}
      comment(
        v-else
        v-for=    "reply in replies",
        :key=     "replies.indexOf(reply)",
        :id=      "reply.id",

        :comment = "reply.comment",
        :author  = "reply.author",
        :title   = "replyTitle(title)",
        :replies = "reply.replies",
      )
</template>

<script>
import user from 'c/social/user'
import close from 'c/closeButton'
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      liked: false,
      repliesOpen: false,
    }
  },
  computed: {
    ...mapGetters({
      replyingToComment: 'user/replyingToComment'
    }),
    replyingToThis () {
      return this.replyingToComment === this.id
    }
  },
  methods: {
    ...mapActions({
      replyToComment: 'user/replyToComment'
    }),
    replyTitle (title) {
      return `Re: ${title}`
    }
  },
  props: {
    id: {
      type: [Number, String],
      default () {
        return 0
      }
    },
    title: {
      type: String,
      default () {
        return 'Comment title'
      }
    },
    comment: {
      type: String,
      default () {
        return 'Mauris at tortor fermentum, rutrum turpis eu, varius mauris..'
      }
    },
    author: {
      type: Object,
      default () {
        return {
          name: 'John Doe',
          avatar: 'doe'
        }
      }
    },
    replies: {
      type: Array,
      default () {
        return []
      }
    },
    date: {
      type: String,
      default () {
        return 'Mar 23, 2017 11:22'
      }
    },
    byAuthor: {
      type: Boolean
    },
    userComment: {
      type: Boolean
    }
  },
  components: {
    user,
    close
    // Comment
  },
  /* eslint-disable global-require */
  name: 'Comment'
  /* eslint-enable global-require */
}
</script>

<style lang="stylus">
.comment
  &__content
    flex 1 1 auto
    padding 0 16px
    background white
    // border-radius 3px
    // box-shadow 0px 1px 2px rgba(black, .15)
    border-left 1px solid rgba(black, .1)
    position relative

    > ul:last-child
      padding-top 12px // more replies button adjust

  &__actions
    margin-top 20px
    background #fafafa

    > *:not(:first-child)
      margin-left 16px

  &__reply
    position relative
    textarea
      min-height 20px
      width 100%

    > span
      font-size 11px
      position absolute
      color #eee
      bottom 8px
      left 8px

.byAuthor
  .comment
    &__content
      background yellow
</style>

