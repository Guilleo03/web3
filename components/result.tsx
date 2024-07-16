"use client";

import { Loader } from "./loader";
import { Response } from "./response";
import mock from "@/mock/ai-response.json";
import { useStore } from "@/utils/store";

export const Result = () => {
  const { response, score, isLoading } = useStore();

  return (
    <div className="w-full rounded-lg">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {response ? (
            <Response score={score} text={response} />
          ) : (
            <>{/* <Response score={mock.score} text={mock.response} /> */}</>
          )}
        </>
      )}
    </div>
  );
};
