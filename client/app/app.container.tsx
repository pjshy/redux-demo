import { connect, MapDispatchToPropsObject } from 'react-redux'

import { AppUIState, Todo } from './../interface'
import { addTodo, editTodo } from './../store'

import { AppComponent } from './app.component'

export interface MapStateToProps extends AppUIState {}

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  onAdd: (todo: Todo) => void
  onEdit: (todo: Todo) => void
}

const mapAppStateToProps = (state: AppUIState): MapStateToProps => {
  return {
   ...state
  }
}

const mapAppDispatchToProps: MapDispatchToProps = {
  onAdd: addTodo,
  onEdit: editTodo
}

export const AppContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)(AppComponent)
