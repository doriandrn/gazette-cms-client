const state = () => ({})

const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      const { data } = await $axios.get('api/siteinfo')
      commit('topics/SET', data)
      console.log('got', data)
      return data
    } catch (e) {
      console.error('Could not fetch data from server', e)
    }
  }
}

export default {
  state,
  actions
}

