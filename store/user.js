const state = () => ({
  activeAction: '',
  replyingToComment: '',
  authenticated: false
})

const actions = {
  replyToComment: ({ commit }, id) => {
    commit('NEW_REPLY', id)
  },
  doAction: ({ commit }, action) => {
    commit('SET_ACTION', action)
  }
}

const mutations = {
  NEW_REPLY: (state, id) => state.replyingToComment = id,
  SET_ACTION: (state, actionId) => state.activeAction = actionId
}

const getters = {
  replyingToComment: state => state.replyingToComment,
  action: state => state.activeAction
}

export default {
  state,
  actions,
  mutations,
  getters
}
