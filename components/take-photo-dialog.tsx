"use client";

import { TakePhotoContent } from "./take-photo-content";
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
import { Camera } from "lucide-react";

export const TakePhotoDialog = () => {
  const { setOpenPhotoDialog, openPhotoDialog } = useStore();

  return (
    <Dialog open={openPhotoDialog} onOpenChange={setOpenPhotoDialog}>
      <DialogTrigger asChild>
        <Button className="md:px-8 px-4 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1 whitespace-nowrap dark:bg-primary bg-gradient-to-r from-primary to-[#29c233] dark:to-primary">
          <Camera className="h-4 w-4" />
          Tomar foto
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[60vw] min-w-[95vw] overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>Tomar foto</DialogTitle>
          <DialogDescription className="text-left">
            Toma una foto de tu producto envasado para leer la información.
          </DialogDescription>
        </DialogHeader>
        <TakePhotoContent />
      </DialogContent>
    </Dialog>
  );
};
