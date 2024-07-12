"use client";

import Webcam from "react-webcam";

export const ButtonWebcam = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {/* @ts-ignore */}
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            const imageSrc = getScreenshot();
            console.log(imageSrc);
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
  );
};
