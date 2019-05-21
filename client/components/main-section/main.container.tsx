import { connect, MapDispatchToPropsObject } from 'react-redux'

import { MainComponent } from './main.component'

import { Todo, Filter, AppState } from '../../interface'
import { editTodo, completeTodo, completeAll, deleteTodo, toggleFilter, clearCompleted } from '../../store'

export interface MapStateToProps {
  todos: Todo[]
  filter: Filter
}

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  editTodo: (todo: Todo) => void
  completeTodo: (todo: Todo) => void
  deleteTodo: (todo: Todo) => void
  completeAll: () => void
  toggleFilter: () => void
  clearCompleted: () => void
}

const mapAppStateToProps = (state: AppState): MapStateToProps => {
  return {
    todos: state.todos,
    filter: state.filter,
  }
}

const mapAppDispatchToProps: MapDispatchToProps = {
  editTodo,
  completeTodo,
  deleteTodo,
  completeAll,
  toggleFilter,
  clearCompleted,
}

export const MainContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps,
)(MainComponent as any) as any
