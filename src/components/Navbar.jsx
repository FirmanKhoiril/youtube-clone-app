import { Box, Typography, Tooltip } from "@mui/material";
import React from "react";
import { BiMenuAltLeft, BiSearch, BiBell } from "react-icons/bi";
import { useStateContext } from "../context/ContextApi";
import { HiMicrophone } from "react-icons/hi";
import { AiOutlineVideoCameraAdd, AiOutlineUserAdd } from "react-icons/ai";
import { SearchBar, Logo } from "./";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setMobile, setMobileSearchActive } = useStateContext();
  return (
    <Box display={"flex"} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10, paddingX: 1 }} height={64} className="bg-dark">
      <Box sx={{ display: "flex", alignItems: "center", p: "4px" }} className="space-x-2">
        <BiMenuAltLeft onClick={() => setMobile((prev) => !prev)} className="text-[40px] rounded-full hover:bg-white/20 p-2" />
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box sx={{ display: "flex", p: { xs: "3px", md: "4px" }, ml: { xs: 3, md: 19 }, justifyContent: "center", alignItems: "center", gap: 1 }}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <SearchBar />
        </Box>
        <BiSearch onClick={() => setMobileSearchActive(true)} className=" text-standart block md:hidden cursor-pointer hover:bg-white/20 p-2 rounded-full" />

        <Tooltip title="Search with Your Voice">
          <span>
            <HiMicrophone className=" text-standart bg-white/5 cursor-pointer hover:bg-white/20 p-2 rounded-full" />
          </span>
        </Tooltip>
      </Box>
      <Box className="flex space-x-1 md:space-x-2 p-1 justify-center text-standart items-center">
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
