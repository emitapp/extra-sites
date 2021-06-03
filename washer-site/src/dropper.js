//https://react-dropzone.js.org/
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => props.onError()
      reader.onerror = () => props.onError()
      reader.onload = () => {
        const str = reader.result
        props.callback(str)
      }
      reader.readAsText(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}