import * as React from 'react'
import { TodosContainer } from './components/todos'

export class AppComponent extends React.PureComponent<void, void> {

  render() {
    return (
      <div className="app-component">
        <TodosContainer />
      </div>
    )
  }

}
