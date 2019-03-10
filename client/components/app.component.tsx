import * as React from 'react'

import { HeaderContainer as Header } from './Header'
import { MainContainer as Main } from './MainSection'

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
