import Presentation from "@/components/presentation";
import { Result } from "@/components/result";
import { TakePhotoDialog } from "@/components/take-photo-dialog";
import { UploadFileDialog } from "@/components/upload-file-dialog";

export default function IndexPage() {
  return (
    <section className="container max-w-[950px] pb-8 pt-6 md:py-10 px-5 md:px-auto">
      <Presentation />
      <div className="flex gap-5 md:gap-10 justify-center items-center">
        <UploadFileDialog />
        <TakePhotoDialog />
      </div>
      <Result />
    </section>
  );
}
