import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { fetchDataYoutube } from "../../api/fetchData";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ChannelProfile, VideoCommentDetails } from "../../components";

const VideoDetail = () => {
  const { id } = useParams();

  const videoDetails = async () => {
    const data = await fetchDataYoutube(`videos?part=snippet,statistics&id=${id}`);
    return data;
  };

  const { data } = useQuery(["detailVideos", id], videoDetails, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {data?.items?.map((item) => (
        <Box minHeight={"95vh"} key={item?.id}>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box flex={1}>
              <Box sx={{ width: "100%", position: "sticky", top: "85px" }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                <Typography variant="h6" sx={{ ml: { xs: 0, md: "107px" } }} p={2} fontWeight={500} color="whitesmoke">
                  {item?.snippet?.title}
                </Typography>
                <ChannelProfile channelId={item?.snippet?.channelId} like={item?.statistics?.likeCount} />
                <VideoCommentDetails id={id} />
              </Box>
            </Box>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default VideoDetail;
