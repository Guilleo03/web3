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

export function validateImage(image: File): boolean {
  // size validation
  const fileSize = (image?.size as number) / (1024 * 1024);
  if (fileSize >= 4) return false;

  // resolution validation
  const img = new Image();
  img.src = URL.createObjectURL(image as File);
  let imgResolution = { width: img.width, height: img.height };

  img.onload = () => {
    imgResolution = { width: img.width, height: img.height };
  };

  if (imgResolution.width > 1920 || imgResolution.height > 2000) return false;

  return true;
}
