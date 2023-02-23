const state = {
  lastId: 3,
  draggableGroup: { name: 'type', pull: 'clone', put: true},
  list: [
    {
      id: 1,
      title: "Обязательные для всех",
      description: 'Документы, обьязательные для всех сотрудников без исключения',
      documents: [
        {
          id: 4,
          typeId: 1,
          title: "Паспорт",
          required: true,
          description: 'Для всех'
        },
        {
          id: 5,
          typeId: 1,
          title: "ИНН",
          required: true,
          description: 'Для всех'
        },
      ]
    },
    {
      id: 2,
      title: "Обязательные для трудоустройства",
      description: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
      documents: [
        {
          id: 6,
          typeId: 2,
          title: "Диплом",
          required: true,
          description: 'Для всех'
        }
      ]
    },
    {
      id: 3,
      title: "Специальные",
      description: '',
      documents: []
    },
  ],
}

const mutations = {
  setTypeItem(state, payload) {
    state.list.push(payload)
    state.lastId++
  },

  typeRemoveItem(state, payload) {
    state.list = state.list.filter(item => item.id != payload)
  },

  typeDocumentRemove(state, payload) {
    state.list.forEach(item => {
      item.documents = item.documents.filter(item => item.id != payload)
    })
  },
}

const actions = {
  addTypeItem ({ commit, getters }) {
    commit('setTypeItem', {
      id: getters.getTypeLastId,
      title: "Тип-" + getters.getTypeLastId,
      description: '',
      documents: []
    })
  },

  typeDocumentRemoveItem ({ commit }, payload) {
    commit('typeDocumentRemove', payload)
  },

  typeRemoveItem ({ commit }, payload) {
    commit('typeRemoveItem', payload)
  }
}

const getters = {
  getTypeList: (state, getters) => {
    
    let newList = state.list.concat()
    const searchText = getters.getSearchText.toLowerCase()

    if (!searchText) {
      return state.list
    }

    let resultTypeIds = []

    newList.forEach((type, index) => {
      const newDocList = type.documents.filter(doc => doc.title.toLowerCase().includes(searchText))
  
      if (newDocList.length == 0) [
        resultTypeIds.push(type.id)
      ]
    }) 

    newList = newList.filter(item => item.title.toLowerCase().includes(searchText) || !resultTypeIds.includes(item.id))

    return newList
  },

  getTypeLastId: state => state.lastId,
  getTypeDraggableGroup: state => state.draggableGroup
}

export default {
  state,
  mutations,
  actions,
  getters
}