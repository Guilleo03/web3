"use client";

import { Button } from "./ui/button";
import { readImage } from "@/app/actions/ai";
import { getBase64FromFile } from "@/utils/common";
import { useStore } from "@/utils/store";
import { Sparkles, Trash } from "lucide-react";

const Actions = () => {
  const { image, setImage, error } = useStore();

  const requestInfo = async () => {
    const base64 = await getBase64FromFile(image as File);
    const result = await readImage(base64);
    console.log(result);
  };

  const handleDelete = () => setImage(undefined);

  return (
    <>
      <div>{error && <p className="text-destructive">{error}</p>}</div>
      <div className="flex justify-end gap-6 mt-6">
        <div className="flex gap-6">
          {image && (
            <Button
              onClick={handleDelete}
              className="px-8 hover:bg-destructive flex items-center gap-x-1"
              variant={"destructive"}
            >
              <Trash className="h-4 w-4" />
              Eliminar foto
            </Button>
          )}
          <form action={requestInfo}>
            <Button
              type="submit"
              className="px-8 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1"
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
