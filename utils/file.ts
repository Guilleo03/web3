import { MAX_IMAGE_SIZE } from "./common";

export const uploadFileErrors = {
  "file-too-large": `La imagen debe pesar menos de ${MAX_IMAGE_SIZE}mb`,
  "file-invalid-type": "Los formatos permitidos son .jpg, .jpeg y .png",
} as const;

export type UploadFileErrorType = keyof typeof uploadFileErrors;
