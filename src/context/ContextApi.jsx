import { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(50);
  const [categori, setCategori] = useState("new");
  const [likes, setLikes] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  return <StateContext.Provider value={{ mobile, categori, likes, setLikes, setCategori, setMobile, mobileSearchActive, setMobileSearchActive, search, setSearch, results, setResults }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
