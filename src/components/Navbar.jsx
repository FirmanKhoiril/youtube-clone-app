import { Box, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { BiMenuAltLeft, BiSearch, BiBell } from "react-icons/bi";
import { useStateContext } from "../context/ContextApi";
import { HiMicrophone } from "react-icons/hi";
import { AiOutlineYoutube, AiOutlineVideoCameraAdd, AiOutlineUserAdd } from "react-icons/ai";
import { SearchBar } from "./";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setMobile } = useStateContext();
  return (
    <Box display={"flex"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }} height={64} className="bg-dark ">
      <Box sx={{ display: "flex", alignItems: "center", p: "4px" }} className="space-x-2">
        <BiMenuAltLeft onClick={() => setMobile((prev) => !prev)} className="text-[40px] rounded-full hover:bg-white/20 p-2" />
        <Link to="/">
          <Box sx={{ display: "flex", gap: "1px", alignItems: "center" }}>
            <AiOutlineYoutube className="text-sky-600 text-4xl " />
            <Typography sx={{ display: { xs: "none", md: "block" }, fontWeight: "700", letterSpacing: "0.035rem", fontFamily: "fantasy" }}>VideoTube</Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: "flex", p: "4px", justifyContent: "center", alignItems: "center", gap: 1 }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchBar />
        </Box>
        <BiSearch className=" text-4xl block md:hidden cursor-pointer hover:bg-white/20 p-2 rounded-full" />

        <Tooltip title="Search with Your Voice">
          <span>
            <HiMicrophone className=" text-4xl cursor-pointer hover:bg-white/20 p-2 rounded-full" />
          </span>
        </Tooltip>
      </Box>
      <Box className="flex space-x-1 md:space-x-2 p-1 justify-center text-4xl items-center">
        <Tooltip arrow title="Create">
          <span>
            <AiOutlineVideoCameraAdd className="hover:bg-white/20 cursor-pointer p-2 rounded-full" />
          </span>
        </Tooltip>
        <Tooltip title="Notifications">
          <span>
            <BiBell className="hover:bg-white/20 cursor-pointer p-2 rounded-full" />
          </span>
        </Tooltip>
        <Tooltip title="User">
          <span>
            <AiOutlineUserAdd className="bg-white/20 cursor-pointer p-2 rounded-full" />
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Navbar;
