"use client";

import { useStore } from "@/utils/store";

export const Response = () => {
  const { response, score } = useStore();

  return (
    <div className="w-full rounded-lg bg-slate-100 h-full">
      <p>{response}</p>
      <p>Resultado final: {score}</p>
    </div>
  );
};
