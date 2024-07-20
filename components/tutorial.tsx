import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Step1 from "@/images/step-1.svg";
import Step2 from "@/images/step-2.svg";
import Step3 from "@/images/step-3.svg";

export const Tutorial = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="whitespace-nowrap hover:bg-transparent"
        >
          ¿Comó funciona?
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[60vw] min-w-[95vw]">
        <DialogHeader>
          <DialogTitle>¿Comó funciona?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
