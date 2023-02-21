import { Box, Tooltip } from "@mui/material";
import { HiMicrophone } from "react-icons/hi";
import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { MdArrowBack } from "react-icons/md";
import { useStateContext } from "../../context/ContextApi";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const navigate = useNavigate();
  const { setMobileSearchActive, search, setSearch, mobileSearchActive } = useStateContext();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <Box sx={{ position: "relative", display: { xs: "block", md: "none" } }}>
      {mobileSearchActive && (
        <Box sx={{ position: "absolute", top: 0, zIndex: 50, height: 60, display: "flex", p: 2, alignItems: "center", gap: 2 }} className="bg-dark/90 w-full">
          <Tooltip title="Back">
            <span>
              <MdArrowBack onClick={() => setMobileSearchActive(false)} className=" text-standart bg-white/5 cursor-pointer hover:bg-white/20 p-2 rounded-full" />
            </span>
          </Tooltip>
          <Box sx={{ position: "relative", display: "flex", alignItems: "center" }} className="bg-white/10 rounded-full">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className=" h-11 py-1  pl-4 pr-7 xs:pr-12  sm:pr-28 rounded-l-full bg-dark border border-white/10 font-semibold tracking-wide focus:border-sky-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <AiOutlineClose className={` ${search == 0 ? "hidden" : "absolute block top-[14px] text-xl xs:left-[220px] left-[200px] sm:right-[52px] cursor-pointer"} `} onClick={() => setSearch("")} />
            </form>
            <Tooltip title="Search">
              <span>
                <AiOutlineSearch onClick={handleSearch} className="bg-white/5  rounded-r-full text-[44px] py-3 cursor-pointer" />
              </span>
            </Tooltip>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobileSearch;
