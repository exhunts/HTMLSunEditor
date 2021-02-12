import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from 'react'

export default function HTMLEditor() {
  const [initialValue, setInitialValue] = useState('')
  const refStateToSave = useRef('')

  const handleEditorChange = content => {
    refStateToSave.current = content
  }

  const onUnload = () => {
    localStorage.setItem('_htmleditor_', refStateToSave.current)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', onUnload)
    const localStorageState = localStorage.getItem('_htmleditor_')
    setInitialValue(localStorageState)
    refStateToSave.current = localStorageState
    return () => window.removeEventListener('beforeunload', onUnload)
  }, [])

  return (
    <div className="container">
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
    </div>
  )
}
