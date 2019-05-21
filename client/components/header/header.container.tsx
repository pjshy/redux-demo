import { connect } from 'react-redux'

import { addTodo } from '../../store'
import { AppState, Todo } from 'interface'
import { HeaderComponent } from './header.component'


export interface MapStateToProps {
  todos: Todo[]
}

const mapAppDispatchToProps = {
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
