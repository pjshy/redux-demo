import * as React from 'react'

import { HeaderContainer as Header } from './header'
import { MainContainer as Main } from './mainsection'

export class AppComponent extends React.PureComponent<void, void> {

  render() {
    return (
      <div className="todoapp">
        <Header />
        <Main />
      </div>
    )
  }

}
