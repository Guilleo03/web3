"use client"

import React, { useCallback, useState } from "react"
import Image from "next/image"
import placeholder from "@/images/upload-file.svg"
import { useDropzone } from "react-dropzone"

import { cn } from "@/lib/utils"

const DragAndDrop: React.FC = () => {
  const [files, setFiles] = useState<File[]>([])
  const [preview, setPreview] = useState<string>()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)

    const newPreviews = URL.createObjectURL(acceptedFiles[0])
    setPreview(newPreviews)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [".jpeg", ".png", "jpg"] },
    onDrop,
  })

  // Clean preview URL
  React.useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview as string)
    }
  }, [preview])

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-dashed w-full text-center border-2 min-h-72 flex items-center justify-center",
        preview ? "" : "cursor-pointer"
      )}
    >
      {preview ? (
        <div>
          <Image
            src={preview}
            alt={`preview`}
            width={350}
            height={600}
            style={{
              objectFit: "cover",
              margin: "10px",
            }}
          />
        </div>
      ) : (
        <div>
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src={placeholder}
              alt="Imagen decorativa para agregar una foto"
              width={150}
              height={150}
              style={{
                objectFit: "contain",
              }}
            />
            <p>Sube la imagen haciendo click aquí</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DragAndDrop
