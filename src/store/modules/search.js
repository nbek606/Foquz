const state = {
  searchText: ''
}

const mutations = {
  setSearchText(state, payload) {
    state.searchText = payload
  }
}

const actions = {
  searchText ({ commit }, payload) {
    commit('setSearchText', payload)
  }
}

const getters = {
  getSearchText: state => state.searchText
}

export default {
  state,
  mutations,
  actions,
  getters
}