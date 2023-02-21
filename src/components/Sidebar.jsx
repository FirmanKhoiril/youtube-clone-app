import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { useStateContext } from "../context/ContextApi";
import { Logo } from "./";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { first, second, three } from "../assets/DataSidebar";

const Sidebar = () => {
  const { setMobile } = useStateContext();
  return (
    <motion.div whileInView={{ x: [-235, 0] }} transition={{ duration: 0.5 }} className="absolute  flex z-40 w-[235px] pl-[6px] pt-[6px] bg-dark h-auto overflow-y-auto flex-col">
      <Box sx={{ display: "flex", alignItems: "center", p: "6px" }} className="space-x-2">
        <BiMenuAltLeft onClick={() => setMobile((prev) => !prev)} className="text-[40px] rounded-full hover:bg-white/20 p-2" />
        <Link to="/">
          <Logo />
        </Link>
      </Box>
      <Box sx={{ borderBottom: 1, borderBottomColor: "rgba(255, 255, 255, 0.2)", p: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", borderBottom: "2px", borderBottomColor: "white" }}>
          {first.map((item) => (
            <button key={item.name} className="flex space-x-2 p-3 rounded-lg hover:bg-white/20 items-center">
              <span className="text-xl">{item.icon}</span>
              <span className="capitalize">{item.name}</span>
            </button>
          ))}
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderBottomColor: "rgba(255, 255, 255, 0.2)", p: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", borderBottom: "2px", borderBottomColor: "white" }}>
          {second.map((item) => (
            <button key={item.name} className="flex space-x-2 p-3 rounded-lg hover:bg-white/20 items-center">
              <span className="text-xl">{item.icon}</span>
              <span className="capitalize">{item.name}</span>
            </button>
          ))}
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderBottomColor: "rgba(255, 255, 255, 0.2)", p: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", borderBottom: "2px", borderBottomColor: "white" }}>
          {three.map((item) => (
            <button key={item.name} className="flex space-x-2 p-3 rounded-lg hover:bg-white/20 items-center">
              <span className="text-xl">{item.icon}</span>
              <span className="capitalize">{item.name}</span>
            </button>
          ))}
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <p className="text-gray-300 text-sm"> @ 2023 Firman K.R</p>
      </Box>
    </motion.div>
  );
};

export default Sidebar;
