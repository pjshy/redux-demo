import * as React from 'react'

import { Todo } from 'interface'

import { TodoInput } from '../common'
import { MapDispatchToProps, MapStateToProps } from './header.container'

export class HeaderComponent extends React.PureComponent<MapDispatchToProps & MapStateToProps> {

  render () {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoInput
          newTodo={ true }
          onSave={ this.onAddTodo }
          placeholder='what to do?'
        />
      </header>
    )
  }

  private onAddTodo = (text: string) => {
    const todo: Todo = {
      text,
      completed: false,
      id: this.props.todos.reduce((maxId, one) => Math.max(one.id, maxId), -1) + 1,
    }

    this.props.addTodo(todo)
  }
}
