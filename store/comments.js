const state = () => ({
  selected: ''
})

const actions = {
  select: ({ commit }, id) => {
    commit('SELECT', id)
  }
}

const mutations = {
  SELECT: (state, id) => state.selected = id,
}

const getters = {
  selected: state => state.selected
}

export default {
  state,
  actions,
  mutations,
  getters
}
