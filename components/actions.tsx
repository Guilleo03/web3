"use client";

import { Button } from "./ui/button";
import { useStore } from "@/utils/store";

const Actions = () => {
  const { image, setImage, error } = useStore();

  const requestInfo = () => {
    console.log("action");
  };

  const handleDelete = () => setImage(undefined);

  return (
    <div className="flex justify-between gap-6 mt-6">
      <div>{error && <p className="text-destructive">{error}</p>}</div>
      <div className="flex gap-6">
        {image && (
          <Button
            onClick={handleDelete}
            className="px-8 text-destructive border-destructive hover:bg-transparent hover:text-destructive"
            variant={"outline"}
            disabled={image ? false : true}
          >
            Eliminar foto
          </Button>
        )}
        <form action={requestInfo}>
          <Button
            type="submit"
            className="px-8 hover:bg-primary hover:opacity-80 transition-all"
            disabled={image ? false : true}
          >
            Consultar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Actions;
