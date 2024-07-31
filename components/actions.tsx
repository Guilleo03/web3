"use client";

import { Button } from "./ui/button";
import { readImage } from "@/app/actions/ai";
import { getFinalScore, removeFinalScoreFromResponse } from "@/utils/ai";
import { getBase64FromFile } from "@/utils/file";
import { compressImage, validateImage } from "@/utils/file";
import { useStore } from "@/utils/store";
import { Sparkles, Trash } from "lucide-react";

const Actions = () => {
  const {
    image,
    setImage,
    error,
    setResponse,
    setScore,
    setOpenFileDialog,
    setOpenPhotoDialog,
    setError,
    setIsLoading,
  } = useStore();

  const requestInfo = async () => {
    try {
      setOpenFileDialog(false);
      setOpenPhotoDialog(false);
      setIsLoading(true);

      let imageToUpload = image;

      const isValidImage = await validateImage(imageToUpload as File);

      if (!isValidImage) {
        const compressedImage = await compressImage(image as File);
        imageToUpload = compressedImage;
      }

      const base64 = await getBase64FromFile(imageToUpload as File);
      const result = (await readImage(base64)) as string;

      const response = removeFinalScoreFromResponse(result);
      const score = getFinalScore(result) as number;

      setResponse(response);
      setScore(score);
      setError("");
      setImage(undefined);
    } catch (e) {
      setError(e as string);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = () => setImage(undefined);

  return (
    <>
      <div>{error && <p className="text-destructive">{error}</p>}</div>
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex gap-6">
          {image && (
            <Button
              onClick={handleDelete}
              className="px-4 md:px-8 hover:bg-destructive flex items-center gap-x-1"
              variant={"destructive"}
            >
              <Trash className="h-4 w-4" />
              Eliminar foto
            </Button>
          )}
          <form action={requestInfo}>
            <Button
              type="submit"
              className="px-4 md:px-8 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1 dark:bg-primary bg-gradient-to-r from-primary to-[#29c233] dark:to-primary"
              disabled={image ? false : true}
            >
              <Sparkles className="h-4 w-4" />
              Consultar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Actions;
