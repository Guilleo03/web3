"use client";

import { Preview } from "./preview";
import placeholder from "@/images/upload-file.svg";
import { cn } from "@/utils/common";
import { MAX_IMAGE_SIZE } from "@/utils/common";
import { uploadFileErrors, UploadFileErrorType } from "@/utils/file";
import { useStore } from "@/utils/store";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";

const DragAndDrop: React.FC = () => {
  const { image, setImage, setError } = useStore();
  const [preview, setPreview] = useState<string>();

  const MAX_SIZE = MAX_IMAGE_SIZE * 1024 * 1024; // 10mb

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    const newPreviews = URL.createObjectURL(acceptedFiles[0]);
    setImage(acceptedFiles[0]);
    setPreview(newPreviews);
    setError("");
  }, []);

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const error = rejectedFiles[0].errors[0].code as UploadFileErrorType;
    const msg = uploadFileErrors[error] || "No se ha podido subir la imagen";
    setError(msg);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [".jpeg", ".png"] },
    maxSize: MAX_SIZE,
    maxFiles: 1,
    onDropAccepted,
    onDropRejected,
  });

  // Clean preview URL
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview as string);
    };
  }, [preview]);

  useEffect(() => {
    if (!image) {
      setPreview("");
      URL.revokeObjectURL(preview as string);
    }
  }, [image]);

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(
          "border-dashed w-full text-center border-2 min-h-72 flex items-center justify-center bg-secondary",
          preview ? "" : "cursor-pointer"
        )}
      >
        {preview ? (
          <Preview imagePath={preview} />
        ) : (
          <div>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-y-4">
              <div className="h-36 w-36">
                <Image
                  src={placeholder}
                  alt="Imagen decorativa para agregar una foto"
                  width={150}
                  height={150}
                  priority={false}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Sube la imagen haciendo click aquí
              </p>
            </div>
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground">
        Tamaño máximo para la imagen: {MAX_IMAGE_SIZE}mb
      </p>
    </>
  );
};

export default DragAndDrop;
