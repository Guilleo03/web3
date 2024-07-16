import React from "react";

interface IResponse {
  text: string;
  score: number | undefined;
}

export const Response = ({ text, score }: IResponse) => {
  return (
    <div className="md:mt-16 mt-5 bg-slate-50 rounded-xl p-6">
      <p>{text}</p>
      {score && <p className="font-bold">Resultado final: {score}</p>}
    </div>
  );
};
