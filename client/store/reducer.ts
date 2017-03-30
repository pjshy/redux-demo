import { createAction } from 'redux-actions'
import { handleActions } from 'redux-actions'

import { AppUIState } from './../interface'

// 定义所有actions
export const increment = createAction('INCREMENT')
export const reduce = createAction('REDUCE')

// 定义所有actions的行为
export const reducer = handleActions({
  [increment.toString()]: (state: AppUIState, action) => {
    console.log(state, action)
    return Object.assign({}, state, {
      count: state.count + 1
    })
  }
}, {
  name: '',
  count: 0
})
