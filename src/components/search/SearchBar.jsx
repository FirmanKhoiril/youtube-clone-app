import React from "react";
import { Box, Tooltip } from "@mui/material";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useStateContext } from "../../context/ContextApi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useStateContext();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center", width: 435 }} className="bg-white/10 rounded-full">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className=" h-12 py-1  pl-4 pr-48 rounded-l-full bg-dark border border-white/10 font-semibold tracking-wide focus:border-sky-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineClose className={` ${search == 0 ? "hidden" : "absolute block top-[14px] text-xl right-[52px] cursor-pointer"} `} onClick={() => setSearch("")} />
      </form>
      <Tooltip title="Search">
        <span>
          <AiOutlineSearch onClick={handleSearch} className="bg-white/5  rounded-r-full text-[44px] p-3 cursor-pointer" />
        </span>
      </Tooltip>
    </Box>
  );
};

export default SearchBar;
