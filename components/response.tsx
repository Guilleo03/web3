import HealthyBar from "./healthy-bar";
import React from "react";

interface IResponse {
  text: string;
  score: number | undefined;
}

export const Response = ({ text, score }: IResponse) => {
  return (
    <div className="md:mt-16 mt-5 bg-popover rounded-xl p-6 shadow">
      <p>{text}</p>
      {score && <HealthyBar score={score} />}
    </div>
  );
};
