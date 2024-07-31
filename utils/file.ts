import { MAX_IMAGE_SIZE } from "./common";
import imageCompression from "browser-image-compression";

export const uploadFileErrors = {
  "file-too-large": `La imagen debe pesar menos de ${MAX_IMAGE_SIZE}mb`,
  "file-invalid-type": "Los formatos permitidos son .jpg, .jpeg y .png",
} as const;

export type UploadFileErrorType = keyof typeof uploadFileErrors;

export async function compressImage(image: File) {
  const options = {
    maxSizeMB: 3.9,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  try {
    const compressedImage = await imageCompression(image, options);
    return compressedImage;
  } catch (error) {
    console.log(error);
  }
}

export function validateImage(image: File): Promise<boolean> {
  return new Promise((resolve, reject) => {
    // Size validation
    const fileSize = image.size / (1024 * 1024);
    if (fileSize >= 4) {
      resolve(false);
      return;
    }

    // Resolution validation
    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = () => {
      const imgResolution = { width: img.width, height: img.height };
      URL.revokeObjectURL(img.src);

      if (imgResolution.width > 1920 || imgResolution.height > 2000) {
        resolve(false);
      } else {
        resolve(true);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(new Error("Failed to load image."));
    };
  });
}

export async function getFileFromBase64(base64String: string) {
  return fetch(base64String)
    .then((res) => res.blob())
    .then((blob) => {
      return new File([blob], "File name", { type: "image/png" });
    });
}

export const getBase64FromFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      } else {
        reject(new Error("Error converting file to base64"));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};
