import { Box, Typography } from "@mui/material";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", gap: "1px", alignItems: "center" }}>
      <AiOutlineYoutube className="text-sky-600 text-standart " />
      <Typography sx={{ display: { xs: "none", md: "block" }, fontWeight: "700", letterSpacing: "0.035rem", fontFamily: "fantasy" }}>VideoTube</Typography>
    </Box>
  );
};

export default Logo;
