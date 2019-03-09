import * as React from 'react'

import { MapStateToProps, MapDispatchToProps } from './main.container'
import { FooterComponent } from '../common'
import { Todo } from '../../interface'

import { TodoItemComponent as TodoItem } from '../common'

type Props = MapStateToProps & MapDispatchToProps

export class MainComponent extends React.PureComponent<Props, void> {

  filterItems = (filterType) => (todos: Todo[]) => {
    const filterFun = {
      show_all: () => true,
      show_completed: (todo: Todo) => todo.completed,
      show_active: (todo: Todo) => !todo.completed,
    }
    return todos.filter(filterFun[filterType])
  }

  renderToggleAll = (completedCount) => {
    const { todos } = this.props
    if (todos.length > 0) {
      return (
        <input
          type='checkbox'
          className='toggle-all'
          checked={ completedCount === todos.length }
          onChange={ this.props.completeAll }
        />
      )
    } else {
      return
    }
  }

  renderFooter = (completedCount) => {
    const { todos, filter, toggleFilter, clearCompleted } = this.props
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <FooterComponent
          completedCount={ completedCount }
          activeCount={ activeCount }
          filter={ filter }
          onShow={ toggleFilter }
          clearCompleted={ clearCompleted }
        />
      )
    } else {
      return
    }
  }

  render() {
    const { todos, completeTodo, deleteTodo, editTodo, filter } = this.props

    const filteredTodos = this.filterItems(filter)(todos)
    const completedCount = todos.reduce(
      (count: number, todo: Todo) => todo.completed ? count + 1 : count,
      0,
    )

    return (
      <section className='main'>
        { this.renderToggleAll(completedCount) }
        <ul className='todo-list'>
          {
            filteredTodos.map(todo => {
              return <TodoItem
                key={ todo.id }
                todo={ todo }
                completedTodo={ completeTodo }
                deleteTodo={ deleteTodo }
                editTodo={ editTodo } />
            })
          }
        </ul>
        { this.renderFooter(completedCount) }
      </section>
    )
  }
}
