import Footer from './Footer'
import HTMLEditor from './HTMLEditor'
import Jumbotrone from './Jumbotrone'
import * as Sentry from '@sentry/react'

function App() {
  return (
    <div>
      <Jumbotrone />
      <HTMLEditor />
      <Footer />
    </div>
  )
}

export default Sentry.withProfiler(App)
