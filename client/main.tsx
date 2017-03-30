import * as React from 'react'
import { render } from 'react-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { AppComponent as App} from './app'

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)
