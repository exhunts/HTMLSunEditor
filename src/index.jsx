import React from 'react'
import ReactDOM from 'react-dom'
// import { Beforeunload } from 'react-beforeunload'

import App from './components/App/App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <Beforeunload onBeforeunload={event => event.preventDefault()}> */}
    <App />
    {/* </Beforeunload> */}
  </React.StrictMode>,
  document.getElementById('root')
)
