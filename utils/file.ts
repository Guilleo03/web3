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
