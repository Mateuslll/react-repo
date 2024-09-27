import React from "react";
import { format } from "date-fns";

export const CurrentHour = () => {
  const now = new Date();
  const hours = now.getHours();
  const fullTime = format(now, "HH:mm:ss");

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">
        {hours >= 0 && hours < 12 && "Bom dia 😀"}
        {hours >= 12 && hours < 18 && "Boa tarde 😀"}
        {hours >= 18 && hours < 24 && "Boa noite 😀"}
      </div>
    </div>
  );
};
