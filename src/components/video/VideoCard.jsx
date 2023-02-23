import { CardMedia, Card, Typography, CardContent } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      thumbnails: {
        high: { url },
      },
      title,
    },
  } = video;

  return (
    <Card sx={{ width: { xs: 320, sm: 280, md: 300 }, borderRadius: 0 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia sx={{ width: { xs: 320, sm: 280, md: 300 }, height: 200 }} image={url} alt={channelTitle} />
      </Link>
      <CardContent sx={{ height: 60 }} className="bg-dark">
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle2" className="truncate  text-white">
            {title}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography className="text-white/60" variant="caption">
            {channelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
