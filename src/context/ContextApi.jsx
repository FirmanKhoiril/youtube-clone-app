import { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [categori, setCategori] = useState("new");
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  return <StateContext.Provider value={{ mobile, categori, setCategori, setMobile, mobileSearchActive, setMobileSearchActive, search, setSearch }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
