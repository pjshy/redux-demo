import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'todomvc-app-css/index.css'

import { AppComponent as App } from './components'
import { store } from './store'

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app'),
)
