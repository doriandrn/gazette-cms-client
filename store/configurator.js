const state = {
  enabled: true,
  open: false
}

const mutations = {
  TOGGLE: (state) => state.open = !state.open
}

const actions = {
  toggle: (c) => {
    c.commit('TOGGLE')
  }
}

const getters = {
  open: s => s.open,
  enabled: s => s.enabled
}

export default {
  state: () => state,
  mutations,
  actions,
  getters
}
