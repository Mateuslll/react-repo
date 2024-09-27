//import React from "react";
import { CurrentHour } from "./currentHour";

const Page = () => {
  // const fullTime = new Intl.DateTimeFormat("pt-BR", {
  //   timeStyle: "short",
  //   hour12: false,
  // });
  // const hours = new Date().getHours();

  // const getGreeting = () => {
  //   if (hours >= 0 && hours < 12) {
  //     return "Boa manhã 😀";
  //   } else if (hours >= 12 && hours < 18) {
  //     return "Boa tarde";
  //   } else {
  //     return "Boa noite";
  //   }
  // };
  // const getState = getGreeting();

  return CurrentHour();
};
export default Page;
