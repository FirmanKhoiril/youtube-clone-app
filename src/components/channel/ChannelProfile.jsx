import { Box, CardMedia, Tooltip, Typography } from "@mui/material";
import millify from "millify";
import React from "react";
import { GoVerified } from "react-icons/go";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchDataYoutube } from "../../api/fetchData";

const ChannelProfile = ({ channelId }) => {
  const profileChannel = async () => {
    const profile = await fetchDataYoutube(`channels?part=snippet,statistics&id=${channelId}`);
    return profile;
  };
  const { data } = useQuery(["profileChannel", channelId], profileChannel, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {data?.items?.map((item, i) => (
        <Box key={i} sx={{ display: "flex", width: { xs: "auto", md: 1025 }, justifyContent: "space-between", flexWrap: "wrap", flexDirection: "row", height: 50, mt: "2px", mx: { xs: 2, md: "120px" } }}>
          <Link to={`/channel/${channelId}`}>
            <CardMedia component="image" onLoad={item?.snippet?.thumbnails?.default?.url} image={item?.snippet?.thumbnails?.high?.url} sx={{ width: 50, height: 50, borderRadius: "40px" }} />
          </Link>
          <Box sx={{ display: "flex", ml: 1, flexDirection: "column" }}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Tooltip placement="top" title={item?.snippet?.title}>
                  <span>{item?.snippet?.title}</span>
                </Tooltip>
                <GoVerified className="text-sm text-gray-400" />
              </Typography>
            </Link>
            <Typography variant="caption" className="text-gray-400">
              {millify(item?.statistics?.subscriberCount)} subscribers
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <button className="py-2 tracking-wide ml-6 px-3 rounded-full text-black font-sans font-semibold  hover:bg-white/90 bg-white">Subscribe</button>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <button></button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ChannelProfile;
