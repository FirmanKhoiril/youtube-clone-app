import { Box, Stack } from "@mui/material";
import React from "react";
import { Genres, Video } from "../components";

const Home = () => {
  return (
    <Stack sx={{ flexDirection: "column" }}>
      <Genres />
      <Video />
    </Stack>
  );
};

export default Home;
