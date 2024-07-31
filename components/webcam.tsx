"use client";

import { Button } from "./ui/button";
import { getFileFromBase64, removeBase64Prefix } from "@/utils/file";
import { useStore } from "@/utils/store";
import { Camera } from "lucide-react";
import Webcam from "react-webcam";

export const ButtonWebcam = () => {
  const videoConstraints = {
    height: 600,
    width: 400,
    facingMode: "environment",
  };

  const { setImage } = useStore();

  return (
    <Webcam
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      screenshotQuality={1}
      style={{ margin: "0 auto" }}
    >
      {/* @ts-ignore */}
      {({ getScreenshot }) => (
        <Button
          type="submit"
          className="px-8 hover:bg-primary hover:opacity-80 transition-all flex items-center gap-x-1 dark:bg-primary bg-gradient-to-r from-primary to-[#29c233] dark:to-primary w-[fit-content] justify-self-center"
          onClick={async () => {
            const photo = getScreenshot();
            const file = await getFileFromBase64(photo as string);
            setImage(file);
          }}
        >
          <Camera className="h-4 w-4" />
          Tomar foto
        </Button>
      )}
    </Webcam>
  );
};
