import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import 'suneditor/dist/css/suneditor.min.css'
import './index.css'

Sentry.init({
  dsn:
    'https://931f2628294b46d8b3b583071da6da67@o522742.ingest.sentry.io/5634980',
  release: 'html-suneditor@' + process.env.npm_package_version,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
