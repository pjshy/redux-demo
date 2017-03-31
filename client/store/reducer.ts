import { createAction } from 'redux-actions'
import { handleActions } from 'redux-actions'

import { UIState, IState } from './../interface'

// 定义initState
export const initState: IState = [<UIState> {
  text: 'redux',
  completed: false,
  id: 0
}]

// 定义所有actions
export const addTodo = createAction('ADD_TODO')
export const deleteTodo = createAction('DELETE_TODO')
export const editTodo = createAction('EDIT_TODO')
export const completeTodo = createAction('COMPLETE_TODO')
export const completeAll = createAction('COMPLETE_ALL')
export const clearCompleted = createAction('CLEAR_COMPLETED')

// 定义所有actions的行为
export const reducer = handleActions<IState, UIState>({
  [addTodo.toString()]: (state, action) => {
    const newTodo = action.payload as UIState
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: newTodo.completed
    }, ...state]
  },

  [deleteTodo.toString()]: (state, action) => {
    const oldTodo = action.payload as UIState
    return state.filter(todo => {
      return todo.id !== oldTodo.id
    })
  },

  [editTodo.toString()]: (state, action) => {
    const newTodo = action.payload as UIState
    return <IState>state.map(todo =>
      todo.id === newTodo.id
        ? { ...todo, text: newTodo.text }
        : todo
    )
  }
}, initState)
