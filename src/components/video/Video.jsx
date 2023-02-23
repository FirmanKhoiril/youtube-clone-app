import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard } from "../";

const Video = ({ videos }) => {
  return (
    <Stack sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "14px", flexWrap: "wrap", m: { xs: 1, md: 2 }, px: 2 }}>
      {videos.map((item, i) => (
        <Box key={i}>{item?.id?.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Video;
