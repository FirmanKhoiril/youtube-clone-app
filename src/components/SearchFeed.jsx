import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchYoutubeApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));

    // recall the function whenever we change the category
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight={"bold"} sx={{ color: "white", letterSpacing: "1px" }} mb={2}>
        Search Result for:
        <span style={{ color: "#f31503" }}> {searchTerm} </span>Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
