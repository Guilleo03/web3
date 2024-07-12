"use client";

import { Button } from "./ui/button";
import { useStore } from "@/utils/store";
import { Sparkles, Trash, Camera } from "lucide-react";

const Actions = () => {
  const { image, setImage, error } = useStore();

  const requestInfo = () => {
    console.log("action");
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
              className="px-8 text-destructive border-destructive hover:bg-transparent hover:text-destructive flex items-center gap-x-1"
              variant={"outline"}
            >
              <Trash className="h-4 w-4" />
              Eliminar foto
            </Button>
          )}
          <Button
            onClick={handleDelete}
            className="px-8 flex items-center gap-x-1 border-primary hover:bg-transparent"
            variant={"outline"}
          >
            <Camera className="h-4 w-4" />
            Tomar foto
          </Button>
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
