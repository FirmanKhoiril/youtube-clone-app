import React from "react";
import { Stack } from "@mui/material";
import { useStateContext } from "../context/ContextApi";
import { categoriesGenre } from "../assets/DataSidebar";

const Genres = () => {
  const { categori, setCategori } = useStateContext();

  return (
    <Stack sx={{ display: "flex", flexDirection: "row", px: 2, py: 1, my: 1, overflowX: "auto", gap: 1 }} className="scroller sticky">
      {categoriesGenre.map((category) => (
        <button
          key={category.name}
          onClick={() => setCategori(category.name)}
          className={` space-x-2 rounded-lg bg-white/10 px-4 py-2 text-sm tracking-wide hover:bg-white/20 flex items-center transition duration-200 mb-4 ${category.name == categori && "bg-white/20"}`}
        >
          <span className="capitalize">{category.name} </span>
          {category.second && <span> {category.second}</span>}
          {category.three && <span> {category.three}</span>}
        </button>
      ))}
    </Stack>
  );
};

export default Genres;
