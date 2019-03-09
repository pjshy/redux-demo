import * as React from 'react'
import * as classNames from 'classnames'

interface Props {
  completedCount: number
  activeCount: number
  filter: string
  clearCompleted: () => void
  onShow: (filter: string) => void
}

export class FooterComponent extends React.PureComponent<Props> {
  render () {
    return (
      <footer className='footer'>
        { this.renderTodoCount() }
        <ul className='filters'>
          { this.renderList() }
        </ul>
        { this.renderClearButton() }
      </footer>
    )
  }

  private renderTodoCount = () => {
    const { activeCount } = this.props
    const itemValue = activeCount > 1 ? 'item' : 'items'

    return (
      <span className='todo-count'>
        <strong>{ activeCount || 'NO'}</strong> {itemValue} left
      </span>
    )
  }

  private renderList = () => {
    return ['show_all', 'show_active', 'show_completed'].map((filter) => {
      return (
        <li key={filter}>
          { this.renderFilterLink(filter) }
        </li>
      )
    })
  }

  private renderFilterLink = (filter) => {
    const { filter: selectedFlter } = this.props

    return (
      <a
        className={ classNames({ selected: filter === selectedFlter }) }
        data-filter={ filter }
        style={{ cursor: 'pointer' }}
        onClick={ this.onChangeFilter }
      >
        { filter }
      </a>
    )
  }

  private renderClearButton = () => {
    const { completedCount } = this.props
    if (completedCount > 0) {
      return (
        <button className='clear-completed' onClick={ this.props.clearCompleted }>
          Clear Completed
        </button>
      )
    } else {
      return
    }
  }

  private onChangeFilter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const dataset = e.currentTarget.dataset
    const filter = dataset.filter || ''
    this.props.onShow(filter)
  }
}
