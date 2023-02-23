const state = {
  draggableHandle: 'moving'
}

const getters = {
  getDraggableHandle: state => state.draggableHandle
}

export default {
  state,
  getters
}