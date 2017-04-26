import { createStore, combineReducers } from 'redux'

import { todos, filter } from './reducer'

const devToolsExtension = 'devToolsExtension'
const reducer = combineReducers({
  todos,
  filter
})

const configureStore = () => {
  const store = createStore(
    reducer,
    window[devToolsExtension] ? window[devToolsExtension]() : (f) => f
  )
  return store
}

export const store = configureStore()
export * from './reducer'
