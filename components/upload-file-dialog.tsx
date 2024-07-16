"use client";

import Actions from "./actions";
import DragAndDrop from "./drag-and-drop";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/utils/store";
import { FileUp } from "lucide-react";

export const UploadFileDialog = () => {
  const { setOpenFileDialog, openFileDialog } = useStore();

  return (
    <Dialog open={openFileDialog} onOpenChange={setOpenFileDialog}>
      <DialogTrigger asChild>
        <Button className="md:px-8 px-4 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1 whitespace-nowrap">
          <FileUp className="h-4 w-4" />
          Subir archivo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subir archivo</DialogTitle>
          <DialogDescription>
            Puedes subir un archivo, arrastrarlo o pegarlo de tu portapapeles.
          </DialogDescription>
        </DialogHeader>
        <DragAndDrop />
        <Actions />
      </DialogContent>
    </Dialog>
  );
};
