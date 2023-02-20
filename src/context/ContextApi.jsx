import { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState("");

  return <StateContext.Provider value={{ mobile, setMobile, search, setSearch }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
