import * as React from 'react'

import { TodoInput } from '../common'

import { MapDispatchToProps } from './header.container'

export class HeaderComponent extends React.PureComponent<MapDispatchToProps> {

  render () {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoInput
          newTodo={ true }
          onSave={ this.props.addTodo }
          placeholder='what to do?'
        />
      </header>
    )
  }

}
