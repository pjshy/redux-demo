import * as React from 'react'

import { MapStateToProps, MapDispatchToProps } from './todos.container'
import { TodoComponent } from './../todo'

type Props = MapStateToProps & MapDispatchToProps

export class TodosComponent extends React.PureComponent<Props, void> {

  render() {
    return (
      <div className="todo-list">
        {
          this.props.todos.map(todo => {
            const { editTodo, deleteTodo, completeTodo } = this.props
            const props = { todo, editTodo, deleteTodo, completeTodo }
            return (
              <TodoComponent { ...props } />
            )
          })
        }
      </div>
    )
  }
}
