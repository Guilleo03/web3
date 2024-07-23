import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const MAX_IMAGE_SIZE = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
