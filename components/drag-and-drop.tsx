"use client";

import placeholder from "@/images/upload-file.svg";
import { cn } from "@/lib/utils";
import { MAX_IMAGE_SIZE } from "@/utils/common";
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
    const errorType = rejectedFiles[0].errors[0].code as string;
    if (errorType === "file-too-large") {
      setError(`La imagen debe pesar menos de ${MAX_IMAGE_SIZE}mb`);
    } else {
      setError("No se ha podido subir la imagen");
    }
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
    <div
      {...getRootProps()}
      className={cn(
        "border-dashed w-full text-center border-2 min-h-72 flex items-center justify-center bg-secondary",
        preview ? "" : "cursor-pointer"
      )}
    >
      {preview ? (
        <div>
          <Image
            src={preview}
            alt="Imagen del producto envasado"
            width={350}
            height={600}
            style={{
              objectFit: "contain",
              margin: "10px",
            }}
          />
        </div>
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
            <p className="text-muted-foreground">
              Sube la imagen haciendo click aquí
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
