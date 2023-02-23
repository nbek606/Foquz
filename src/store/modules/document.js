const state = {
  lastId: 4,
  sortList: [],
  draggableGroup: { name: 'document' },
  list: [
    {
      id: 1,
      title: "Документ-1",
      required: false,
      description: ''
    },
    {
      id: 2,
      title: "Документ-2",
      required: true,
      description: ''
    },
    {
      id: 3,
      title: "Документ-3",
      required: false,
      description: 'Для всех'
    }
  ]
}

const mutations = {
  setDocumentItem(state, payload) {
    state.list.push(payload)
    state.lastId++
  },

  removeDocumentItem (state, payload) {
    state.list = state.list.filter(item => item.id != payload)
  },
}

const actions = {
  documentNewItem ({ commit, getters }, payload) {
    commit('setDocumentItem', {
      id: getters.getDocumentLastId,
      title: "Документ-" + getters.getDocumentLastId,
      required: false,
      description: ''
    })
  },

  documentRemoveItem ({ commit }, payload) {
    commit('removeDocumentItem', payload)
  }
}

const getters = {
  getDocumentList: (state, getters) => {
    const searchText = getters.getSearchText.toLowerCase()

    if (searchText) {
      return state.list.filter(item => item.title.toLowerCase().includes(searchText))
    } 

    return state.list
  },

  getDocumentLastId: state => state.lastId,
  getDocumentDraggableGroup: state => state.draggableGroup
}

export default {
  state,
  mutations,
  actions,
  getters
}