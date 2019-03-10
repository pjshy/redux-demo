import * as React from 'react'
import * as classNames from 'classnames'

import { Todo } from '../../interface'

import { TodoInput } from './TodoTextInput'

interface Props {
  todo: Todo
  editTodo: (todo: Todo, text: string) => void
  deleteTodo: (todo: Todo) => void
  completedTodo: (todo: Todo) => void
  key?: any
}

interface State {
  editing: boolean
}

export class TodoItemComponent extends React.PureComponent<Props, State> {
  constructor (props, context) {
    super(props, context)
    this.state = { editing: false }
  }

  handleSave = (todo: Todo) => (text: string) => {
    if (text.length === 0) {
      this.props.deleteTodo(todo)
    } else {
      this.props.editTodo(todo, text)
    }
    this.setState({ editing: false })
  }

  handleToggle = (todo) => () => {
    this.props.completedTodo(todo)
  }

  handleDoubleClick = () => {
    this.setState({ editing: false })
  }

  handleDelete = (todo) => () => {
    this.props.deleteTodo(todo)
  }

  render () {
    const { todo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoInput
          text={ todo.text }
          editing={ this.state.editing }
          onSave={ this.handleSave(todo) }
        />
      )
    } else {
      element = (
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={ todo.completed }
            onChange={ this.handleToggle(todo) }
          />
          <label onDoubleClick={ this.handleDoubleClick }>
            { todo.text }
          </label>
          <button className='destroy' onClick={ this.handleDelete(todo) } />
        </div>
      )
    }

    return (
      <li
        className={ classNames({ completed: todo.completed, editing: this.state.editing }) }
      >
        { element }
      </li>
    )
  }
}
