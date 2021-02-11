import HTMLEditor from '../HTMLEditor/HTMLEditor'
import './App.css'

// Optimization
// ------------
// Question :   What is to optimize?
// Answer   :   Every editor change fires 'handleEditorChange' that
//              triggers 'localStorage' update.
// Solution :   On leaving page show alert with prompt to save file in 'localStorage'.
// New Idea :   Get rid of 'useState hook' and use just 'useRef' instead.
// ------------
function App() {
  return (
    <>
      <HTMLEditor />
    </>
  )
}

export default App
