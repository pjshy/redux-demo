import { createAction } from 'redux-actions'
import { handleActions, Action } from 'redux-actions'

import { AppUIState, Todo } from './../interface'

// 定义initState
export const initState: AppUIState = {
  newTodo: false,
  todos: [],
  todoFilter: 'all'
}

// 定义所有actions
export const addTodo = createAction('ADD_TODO')
export const deleteTodo = createAction('DELETE_TODO')
export const editTodo = createAction('EDIT_TODO')
export const completeTodo = createAction('COMPLETE_TODO')
export const completeAll = createAction('COMPLETE_ALL')
export const clearCompleted = createAction('CLEAR_COMPLETED')
export const toggleFilter = createAction('TOGGLE_FILTER')

// 定义所有actions的行为
export const reducer = handleActions<AppUIState>({
  [addTodo.toString()]: (state: AppUIState, action: Action<Todo>) => {
    const todos = state.todos
    const newTodo = action.payload as Todo
    state.todos = [{
      ...newTodo,
      id: state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
    }, ...todos]
    return state
  },

  [deleteTodo.toString()]: (state: AppUIState, action: Action<number>) => {
    const index = action.payload
    state.todos = state.todos.filter(todo => todo.id !== index)
    return state
  },

  [editTodo.toString()]: (state: AppUIState, action: Action<Todo>) => {
    const newTodo = action.payload as Todo
    state.todos = state.todos.map(todo =>
      todo.id === newTodo.id
        ? { ...newTodo }
        : todo
    )
  },

  [completeTodo.toString()]: (state: AppUIState, action: Action<Todo>) => {
    const newTodo = action.payload as Todo
    state.todos.map(todo => todo.id === newTodo.id ? )
  }
}, initState)
