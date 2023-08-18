import { DropzoneIcon } from '@/icons'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import Image from 'next/image'

const ImageUploader: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: any) => {}, [])

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop, accept: {}, maxSize: 5000000 })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <StyledDropzone>
          <DropzoneIcon />
          <span className="ImageUploader__text Text_16_24">
            Перетащите изображение сюда или <span>загрузите с устройства</span>
          </span>
        </StyledDropzone>
      ) : (
        <StyledDropzone>
          <DropzoneIcon />
          <span className="ImageUploader__text Text_16_24">
            Перетащите изображение сюда или <span>загрузите с устройства</span>
          </span>
        </StyledDropzone>
      )}
      <div className="ImageUploader__imagesList">
        {acceptedFiles.map(file => (
          <div key={file.name}>
            <Image src={URL.createObjectURL(file)} alt={file.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

const StyledDropzone = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  border: 1px dashed #d4ddee;
  border-radius: 10px;

  :hover {
    background-color: #f1f7ff;
  }

  .ImageUploader__text {
    margin-top: 15px;

    span {
      color: #4e6af3;
    }
  }

  .ImageUploader__imagesList {
    margin-top: 40px;
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    grid-gap: 16px;
  }
`

export { ImageUploader }
