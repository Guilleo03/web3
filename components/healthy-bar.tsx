"use client";

import { HELATHY_BAR_COLORS } from "@/utils/ai";
import { useEffect } from "react";

interface IHealthyBar {
  score: number;
}

const HealthyBar = ({ score }: IHealthyBar) => {
  const barWidth = score * 10;

  useEffect(() => {
    const style = document.createElement("style");
    setTimeout(() => {
      style.innerHTML = `
      #healthy-bar::before {
        width: ${barWidth}%;
        background-color: ${HELATHY_BAR_COLORS[score]}
      }
    `;
      document.head.appendChild(style);
    }, 500);
  }, []);

  return (
    <div className="mt-10 pb-4">
      <p className="font-bold mb-4">Resultado final: {score}</p>
      <div
        id="healthy-bar"
        className="w-full rounded-full h-2 bg-slate-200 relative before:absolute before:h-full before:top-0 before:left-0 before:rounded-full before:w-0 before:transition-all before:duration-1000"
      />
      <ul className="flex justify-between w-full h-2">
        {Array.from({ length: 11 }).map((_, index) => (
          <li
            key={index}
            className="w-[1px] h-2 bg-slate-400 mt-1 flex justify-center"
          >
            {index === score && <span className="mt-2 text-sm">{score}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthyBar;
