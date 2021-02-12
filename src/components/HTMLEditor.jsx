import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from 'react'
import SunEditor, { buttonList } from 'suneditor-react'

export default function HTMLEditor() {
  const [content, setContent] = useState('')
  const refStateToSave = useRef('')
  const editorRef = useRef()

  const onUnload = () => {
    localStorage.setItem(
      '_htmleditor_',
      editorRef.current.editor.core.getContents()
    )
  }

  useEffect(() => {
    window.addEventListener('beforeunload', onUnload)
    const localStorageState = localStorage.getItem('_htmleditor_')
    setContent(localStorageState)
    refStateToSave.current = localStorageState
    return () => window.removeEventListener('beforeunload', onUnload)
  }, [])

  return (
    <div className="container">
      <SunEditor
        setContents={content}
        ref={editorRef}
        enableToolbar={true}
        showToolbar={true}
        setOptions={{
          height: 500,
          buttonList: buttonList.complex,
        }}
      />
    </div>
  )
}
