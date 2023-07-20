import "@/styles/globals.css";
import { useReducer } from "react";
import { MainContext } from "@/store/MainContext";
import { initialState } from "@/store/MainContext";
import MainReducer from "@/store/reducer";

export default function App({ Component, pageProps }) {
  7;
  const [state, dispatch] = useReducer(MainReducer, initialState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}
