import * as React from 'react'

import { IncrementContainer as Increment } from './increment'

export class AppComponent extends React.PureComponent<void, void> {

  render() {
    return (
      <div className="app-component">
        <Increment />
      </div>
    )
  }
}
