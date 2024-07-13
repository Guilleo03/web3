"use client";

import Webcam from "react-webcam";

export const ButtonWebcam = () => {
  const videoConstraints = {
    height: 600,
    width: 400,
    facingMode: "environment",
  };

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
