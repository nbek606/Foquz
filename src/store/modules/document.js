const state = {
  lastId: 10,
  sortList: [],
  draggableGroup: { name: 'document', page: 'document' },
  list: [
    {
      id: 7,
      title: "Документ-7",
      required: false,
      description: ''
    },
    {
      id: 8,
      title: "Документ-8",
      required: true,
      description: ''
    },
    {
      id: 9,
      title: "Документ-9",
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
  getDocumentDraggableGroup: state => state.draggableGroup,
}

export default {
  state,
  mutations,
  actions,
  getters
}