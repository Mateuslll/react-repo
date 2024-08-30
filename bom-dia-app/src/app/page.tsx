import React from "react";

const Page = () => {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  });
  const hours = new Date().getHours();

  const getGreeting = () => {
    if (hours >= 0 && hours < 12) {
      return "Boa manhã";
    } else if (hours >= 12 && hours < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };
  const getState = getGreeting();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime.format(new Date())}</div>
      <div className="text-5xl font-bold">{getState}</div>
    </div>
  );
};
export default Page;
