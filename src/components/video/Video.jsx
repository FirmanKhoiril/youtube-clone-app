import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard } from "../";

const Video = ({ videos }) => {
  console.log(videos);
  return (
    <Stack sx={{ display: "flex", m: { xs: 1, md: 2 } }}>
      <Box>
        <VideoCard />
      </Box>
    </Stack>
  );
};

export default Video;
