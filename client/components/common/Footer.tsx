import * as React from 'react'
import * as classNames from 'classnames'

interface Props {
  completedCount: number
  activeCount: number
  filter: string
  clearCompleted: () => void
  onShow: (filter: string) => void
}

export class FooterComponent extends React.PureComponent<Props, void> {
  renderTodoCount = () => {
    const { activeCount } = this.props
    const itemValue = activeCount > 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong>{ activeCount || 'NO'}</strong> {itemValue} left
      </span>
    )
  }

  renderFilterLink = (filter) => {
    const { filter: selectedFlter, onShow } = this.props

    return (
      <a 
        className={ classNames({selected: filter === selectedFlter}) }
        style={{ cursor: 'pointer' }}
        onClick={ () => onShow(filter) }>
        { filter }
      </a>
    )
  }

  renderClearButton = () => {
    const { completedCount,  clearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className='clear-completed' onClick={ () => clearCompleted() }>
          Clear Completed
        </button>
      )
    } else {
      return
    }
  }

  render() {
    return (
      <footer className="footer">
        { this.renderTodoCount() }
        <ul className="filters">
          {['show_all', 'show_active', 'show_completed'].map(filter => {
            return (
              <li key={filter}>
                { this.renderFilterLink(filter) }
              </li>
            )
          })}
        </ul>
        { this.renderClearButton() }
      </footer>
    )
  }
}
