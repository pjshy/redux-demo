import { connect, MapDispatchToPropsObject } from 'react-redux'

import { addTodo } from '../../store'
import { AppState, Todo } from 'interface'
import { HeaderComponent } from './header.component'

export interface MapDispatchToProps extends MapDispatchToPropsObject {
  addTodo: (one: Todo) => void
}

export interface MapStateToProps {
  todos: Todo[]
}

const mapAppDispatchToProps: MapDispatchToProps = {
  addTodo,
}

const mapAppStateToProps = (state: AppState): MapStateToProps => {
  return {
    todos: state.todos,
  }
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19989
export const HeaderContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps,
)(HeaderComponent as any) as any
