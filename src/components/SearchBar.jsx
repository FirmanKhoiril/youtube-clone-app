import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      // navigate ke value search
      // dan kembalikan input kososng seperti semula
      setSearchTerm("");
    }
  };
  return (
    <Paper components="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, border: "1px solid #e3e3e3", boxShadow: "none", pl: 2, mr: { sm: 5 } }}>
      <input type="text" className="search-bar" placeholder="Search.." value={searchTerm} style={{ letterSpacing: "0.7px" }} onChange={(e) => setSearchTerm(e.target.value)} />
      <IconButton onClick={handleSubmit} type="submit" sx={{ p: "10px", color: "#dc2626" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
