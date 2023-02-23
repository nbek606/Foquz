import { createStore } from 'vuex'

import search from './modules/search'
import type from './modules/type'
import document from './modules/document'
import globals from './modules/globals'

export default createStore({
  modules: {
    search,
    document,
    type,
    globals
  }
})
