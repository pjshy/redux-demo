import * as React from 'react'
import * as classNames from 'classnames'

import { InputItem } from '../input'
import { Todo } from './../../../interface'

interface Props {
  deleteTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
  completeTodo: (todo: Todo) => void
  todo: Todo
}

export class TodoComponent extends React.PureComponent<Props, void> {

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    editing: React.PropTypes.bool.isRequired
  }

  renderTodoItem() {
    const { completed, text } = this.props.todo

    const cls = classNames('todo-component', {
      completed
    })

    const completeTodo = () => {
      this.props.completeTodo(this.props.todo)
    }

    const editTodo = () => {
      this.props.editTodo({ ...this.props.todo, editing: true })
    }

    return (
      <div className={ cls } onClick={ editTodo }>
        <div className="toggle-handler" onClick={ completeTodo }></div>
        <div className="todo">{ text }</div>
      </div>
    )
  }

  renderInputItem() {
    const todo = this.props.todo

    const onContentChange = (text: string) => {
      const newTodo = { ...todo, text }
      this.props.editTodo(newTodo)
    }

    const submitContent = () => {
      const newTodo = { ...todo, editing: false }
      this.props.editTodo(newTodo)
    }

    const props = { content: todo.text, onContentChange, submitContent }

    return (
      <InputItem { ...props } />
    )
  }

  render() {
    if (this.props.todo.editing) {
      return this.renderInputItem()
    } else {
      return this.renderTodoItem()
    }
  }
}
