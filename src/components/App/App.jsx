import { Editor } from '@tinymce/tinymce-react'
import './App.css'

function App() {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content)
  }

  return (
    <Editor
      apiKey="hh5kg0elochz6bff3y37wn287nnbefh3g07o68m5fl6igvay"
      initialValue="<p>This is the initial content of the editor</p>"
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
