import { createAction, handleActions } from 'redux-actions'
import { Action } from 'redux-actions'
import { Todo, Filter } from '../interface'

export const addTodo = createAction('ADD_TODO')
export const deleteTodo = createAction('DELETE_TODO')
export const editTodo = createAction('EDIT_TODO')
export const completeTodo = createAction('COMPLETE_TODO')
export const completeAll = createAction('COMPLETE_ALL')
export const clearCompleted = createAction('CLEAR_COMPLETED')

export const toggleFilter = createAction('TOGGLE_FILTER')

const todosInit: Todo[] = [{
  id: 0,
  text: 'hello rudux',
  completed: false,
}]

const todosFilter: Filter = 'show_all'  // show_all, show_completed, show_active

export const todos = handleActions<Todo[], Todo>({
  [addTodo.toString()]: (state: Todo[], action: Action<Todo>): Todo[] => {
    return [action.payload!, ...state]
  },

  [deleteTodo.toString()]: (state: Todo[], action: Action<Todo>): Todo[] => {
    const payload = action.payload as Todo
    return state.filter((todo) => {
      return todo.id !== payload.id
    })
  },

  [editTodo.toString()]: (state: Todo[], action: Action<Todo>): Todo[] => {
    const payload = action.payload as Todo
    return state.map((todo) =>
      todo.id === payload.id
        ? { ...payload }
        : todo,
    )
  },

  [completeTodo.toString()]: (state: Todo[], action: Action<Todo>): Todo[] => {
    const payload = action.payload as Todo
    return state.map((todo) =>
      todo.id === payload.id
        ? { ...todo, completed: !payload.completed }
        : todo,
    )
  },

  [completeAll.toString()]: (state: Todo[]): Todo[] => {
    const allCompleted = state.every((todo) => todo.completed)
    return state.map((todo) => {
      return { ...todo, completed: !allCompleted }
    })
  },

  [clearCompleted.toString()]: (state: Todo[]): Todo[] => {
    return state.filter((todo) =>
      !todo.completed,
    )
  },
}, todosInit)

export const filter = handleActions<Filter>({
  [toggleFilter.toString()]: (state: Filter, action: Action<Filter>) => {
    const { payload } = action
    if (payload && payload !== state) {
      return payload
    } else {
      return state
    }
  },
}, todosFilter)
