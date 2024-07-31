"use client";

import Actions from "./actions";
import { Preview } from "./preview";
import { ButtonWebcam } from "@/components/webcam";
import { useStore } from "@/utils/store";
import React, { useEffect, useState } from "react";

export const TakePhotoContent = () => {
  const { image } = useStore();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (image) {
      const newPreview = URL.createObjectURL(image as File);
      setPreview(newPreview);
    }
  }, [image]);

  return (
    <>
      {image && preview ? (
        <>
          <Preview imagePath={preview as string} />
          <Actions />
        </>
      ) : (
        <ButtonWebcam />
      )}
    </>
  );
};
