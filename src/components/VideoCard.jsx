import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { xs: "100%", md: "320px", sm: "358px" }, boxShadow: "none", borderRadius: "7px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 220, objectFit: "cover" }} />
      </Link>
      <CardContent sx={{ backgroundColor: "#111827", height: "75px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "#06b6d4", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
