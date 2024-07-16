import Actions from "./actions";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonWebcam } from "@/components/webcam";
import { Camera } from "lucide-react";

export const TakePhotoDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="md:px-8 px-4 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1 whitespace-nowrap">
          <Camera className="h-4 w-4" />
          Tomar foto
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[60vw] min-w-[95vw]">
        <DialogHeader>
          <DialogTitle>Subir archivo</DialogTitle>
          <DialogDescription>
            Puedes subir un archivo, arrastrarlo o pegarlo de tu portapapeles.
          </DialogDescription>
        </DialogHeader>
        <ButtonWebcam />
        <Actions />
      </DialogContent>
    </Dialog>
  );
};
