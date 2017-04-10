import { connect, MapDispatchToPropsObject } from 'react-redux'

import { TodosComponent } from './todos.component'

import { AppUIState, Todos, Todo } from './../../../interface'
import { deleteTodo, editTodo, completeTodo } from './../../../store'

export interface MapStateToProps {
  todos: Todos
}

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  deleteTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
  completeTodo: (todo: Todo) => void
}

const mapAppStateToProps = (state: AppUIState): MapStateToProps => {
  return {
    todos: state.todos
  }
}

const mapAppDispatchToProps: MapDispatchToProps = {
  deleteTodo,
  editTodo,
  completeTodo
}

export const TodosContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)(TodosComponent)
