import { createContext } from "react";

export const MainContext = createContext({});

export const initialState = {
  isLogged: true,
  data: [
    { name: "Taylor", id: 1, task: "take a walk with the dog" },
    { name: "Swiff", id: 2, task: "take a walk with Mari" },
    { name: "Cerm", id: 3, task: "send money to Nina" },
  ],
};
