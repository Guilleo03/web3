"use client";

import { Loader } from "./loader";
import { useStore } from "@/utils/store";

export const Response = () => {
  const { response, score, isLoading } = useStore();

  return (
    <div className="w-full rounded-lg">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {response ? (
            <div>
              <p>{response}</p>
              {score && <p>Resultado final: {score}</p>}
            </div>
          ) : (
            <>
              <Loader />
            </>
          )}
        </>
      )}
    </div>
  );
};
