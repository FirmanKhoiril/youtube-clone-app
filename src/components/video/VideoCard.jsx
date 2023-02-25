import { CardMedia, Card, Typography, CardContent } from "@mui/material";
import React from "react";
import moment from "moment/moment";
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
      publishedAt,
    },
  } = video;

  return (
    <Card sx={{ width: { xs: 320, sm: 280, md: 300 }, borderRadius: 0 }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia sx={{ width: { xs: 320, sm: 280, md: 300 }, height: 170 }} image={url} alt={channelTitle} />
      </Link>

      <CardContent sx={{ height: 80 }} className="bg-dark">
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle2" className="truncate text-white">
            {title}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`} className="flex items-center space-x-2">
          <Typography className="text-white/60" variant="caption">
            {channelTitle}
          </Typography>
          <Typography className="text-white/60" variant="caption">
            {moment(publishedAt, "YYYYMMDD").fromNow()}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
