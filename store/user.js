const state = () => ({
  replyingToComment: ''
})

const actions = {
  replyToComment: ({ commit }, id) => {
    commit('NEW_REPLY', id)
  }
}

const mutations = {
  NEW_REPLY: (state, id) => state.replyingToComment = id
}

const getters = {
  replyingToComment: state => state.replyingToComment
}

export default {
  state,
  actions,
  mutations,
  getters
}
