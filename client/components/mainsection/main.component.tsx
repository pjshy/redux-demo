import * as React from 'react'

import { Todo } from 'interface'
import { MapStateToProps, MapDispatchToProps } from './main.container'
import { TodoItemComponent as TodoItem, FooterComponent } from '../Common'

type Props = MapStateToProps & MapDispatchToProps

export class MainComponent extends React.PureComponent<Props> {

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

  render () {
    const completedCount = this.props.todos.reduce(
      (count: number, todo: Todo) => todo.completed ? count + 1 : count,
      0,
    )

    return (
      <section className='main'>
        { this.renderToggleAll(completedCount) }
        <ul className='todo-list'>
          { this.renderList() }
        </ul>
        { this.renderFooter(completedCount) }
      </section>
    )
  }

  private renderList = () => {
    const { todos, completeTodo, deleteTodo, editTodo, filter } = this.props
    const filteredTodos = this.filterItems(filter)(todos)
    return filteredTodos.map((todo) => {
      return <TodoItem
        key={ todo.id }
        todo={ todo }
        completedTodo={ completeTodo }
        deleteTodo={ deleteTodo }
        editTodo={ editTodo }
      />
    })
  }
}
