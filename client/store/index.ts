import { createStore } from 'redux'
// import { compose } from 'redux'

import { reducer } from './reducer'

const devToolsExtension = 'devToolsExtension'

const configureStore = () => {
  const store = createStore(
    reducer,
    window[devToolsExtension] ? window[devToolsExtension]() : (f) => f
  )
  return store
}

export const store = configureStore()
export * from './reducer'
