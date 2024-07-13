import Presentation from "@/components/presentation";
import { Response } from "@/components/response";
import { TakePhotoDialog } from "@/components/take-photo-dialog";
import { UploadFileDialog } from "@/components/upload-file-dialog";

export default function IndexPage() {
  return (
    <section className="container max-w-[920px] pb-8 pt-6 md:py-10">
      <Presentation />
      <div className="flex gap-10 justify-center items-center">
        <UploadFileDialog />
        <TakePhotoDialog />
      </div>
      <Response />
    </section>
  );
}
