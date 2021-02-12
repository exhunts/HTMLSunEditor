import Footer from './Footer'
import HTMLEditor from './HTMLEditor'
import Jumbotrone from './Jumbotrone'
import * as Sentry from '@sentry/react'

function App() {
  return (
    <>
      <Jumbotrone />
      <HTMLEditor />
      <Footer />
    </>
  )
}

export default Sentry.withProfiler(App)
