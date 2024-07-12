import Actions from "@/components/actions";
import DragAndDrop from "@/components/drag-and-drop";
import Presentation from "@/components/presentation";
import { ButtonWebcam } from "@/components/webcam";
import { MAX_IMAGE_SIZE } from "@/utils/common";

export default function IndexPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex flex-col md:flex-row items-start gap-x-24">
        <div className="flex-1">
          <Presentation />
          {/* <ButtonWebcam /> */}
          <DragAndDrop />
          <p className="text-xs mt-2">
            Tamaño máximo para la imagen: {MAX_IMAGE_SIZE}mb
          </p>
          <Actions />
        </div>
        <div className="flex-1">response</div>
      </div>
    </section>
  );
}
