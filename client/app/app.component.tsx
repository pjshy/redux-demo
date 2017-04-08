import * as React from 'react'

import { MapStateToProps, MapDispatchToProps } from './app.container'

type Props = MapStateToProps & MapDispatchToProps

export class AppComponent extends React.PureComponent<Props, void> {

  onAddTodo = () => {
    this.props.onAdd({id: 0, text: 'hello', completed: false, editing: false})
  }

  render() {
    return (
      <div className="app-component">
        <button onClick={this.onAddTodo}>test add</button>
      </div>
    )
  }
}
