import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { fetchDataYoutube } from "../../api/fetchData";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { ChannelProfile, Loading, Error, Video, VideoCommentDetails } from "../../components";

const VideoDetail = () => {
  const { id } = useParams();

  const videoDetails = async () => {
    const data = await fetchDataYoutube(`videos?part=snippet,statistics&id=${id}`);
    return data;
  };

  const relatedVideo = async () => {
    const data = await fetchDataYoutube(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    return data;
  };
  const { data: related, isLoading: load, isFetching: fetc, isError: ror, isSuccess: succeses } = useQuery(["relatedvideos", id], relatedVideo, { refetchOnWindowFocus: false });
  const { data, isLoading, isFetching, isError, error, isSuccess } = useQuery(["detailVideos", id], videoDetails, {
    refetchOnWindowFocus: false,
  });
  // fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  // .then((data) => setVideos(data.items))

  return (
    <>
      {isLoading && isFetching && load && fetc && <Loading />}
      {isError && ror && <Error error={error} />}
      {isSuccess && succeses && (
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
                    {/* <Stack sx={{ color: "#fff" }} py={1} px={2}>
                      <ChannelProfile channelId={item?.snippet?.channelId} like={item?.statistics?.likeCount} />
                      <VideoCommentDetails id={id} />
                    </Stack> */}
                  </Box>
                </Box>
                <Box py={4}>
                  <Video videos={related?.items} direction="column" />
                </Box>
              </Stack>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default VideoDetail;
