"use client";

import { Webcam } from "@webcam/react";

export const ButtonWebcam = () => (
  <Webcam>
    {({ getSnapshot }) => (
      <button onClick={() => console.log(getSnapshot({ quality: 0.8 }))}>
        Make photo
      </button>
    )}
  </Webcam>
);
