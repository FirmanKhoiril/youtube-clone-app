import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => (
  <Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
    {categories.map((item) => (
      <button onClick={() => setSelectedCategory(item.name)} className="category-btn" style={{ background: item.name === selectedCategory && "#475569" }} key={item.name}>
        <span style={{ color: item.name === selectedCategory ? "white" : "red" }}>{item.icon}</span>
        <span style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}>{item.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
