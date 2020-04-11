<template lang="pug">
li(:class="{ byAuthor, userComment, selected }")
  user(:data= "author") {{ date }}

  .comment__content(@click="selectComment(id)")
    p {{ comment }}

    //- .comment__reply
    //-   button(data-icon="close") Close
    //-   textarea(placeholder="your opinion")
    //-   span Markdown supported.

  .comment__actions(v-if="selected && !replyingToThis")
    button(data-icon="like") Like
    button(@click="replyToComment(id)" data-icon="reply") Reply

  form.reply(v-if="replyingToThis")
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
      :replies = "reply.replies",
    )
</template>

<script>
import user from 'c/social/user'

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
      replyingToComment: 'user/replyingToComment',
      selectedComment: 'comments/selected'
    }),
    replyingToThis () {
      return this.replyingToComment === this.id
    },
    selected () {
      return this.selectedComment === this.id
    }
  },
  methods: {
    ...mapActions({
      replyToComment: 'user/replyToComment',
      selectComment: 'comments/select'
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
    flex 0 0 100%
    position relative
    padding-top 20px
    padding-left 32px

    &:before
      content ''
      width 1px
      position absolute
      top: -12px;
      left: 0px;
      bottom: -80px;
      background-color #eee

    > ul:last-child
      padding-top 12px // more replies button adjust

  &__actions
    margin-top 10px
    margin-left 12px

    > *:not(:first-child)
      margin-left 8px

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

