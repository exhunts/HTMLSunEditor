import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from 'react'
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
  const [initialValue, setInitialValue] = useState('')
  const refStateToSave = useRef('')

  const handleEditorChange = (content, editor) => {
    refStateToSave.current = content
  }

  const onUnload = () => {
    localStorage.setItem('_htmleditor_', refStateToSave.current)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', onUnload)
    setInitialValue(localStorage.getItem('_htmleditor_'))
    refStateToSave.current = localStorage.getItem('_htmleditor_')
    return () => window.removeEventListener('beforeunload', onUnload)
  }, [])

  return (
    <Editor
      apiKey="hh5kg0elochz6bff3y37wn287nnbefh3g07o68m5fl6igvay"
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={handleEditorChange}
    />
  )
}

export default App
