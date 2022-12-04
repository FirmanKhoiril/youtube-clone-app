import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", backgroundColor: "#111827", justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography sx={{ color: "white", fontWeight: "900", fontSize: "18px", height: "20px", marginLeft: "5px" }}>YouClone</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
