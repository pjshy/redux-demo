import * as React from 'react'

import { HeaderContainer as Header } from './header'
import { MainContainer as Main } from './main-section'

export class AppComponent extends React.PureComponent<{}, {}> {

  render () {
    return (
      <div className='todoapp'>
        <Header />
        <Main />
      </div>
    )
  }

}
