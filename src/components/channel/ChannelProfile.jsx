import { Box, CardMedia, Tooltip, Typography } from "@mui/material";
import millify from "millify";
import React from "react";
import { Error, Loading } from "../../components";
import { GoVerified } from "react-icons/go";
import { useQuery } from "react-query";
import { RiMenuAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineScissor } from "react-icons/ai";
import { fetchDataYoutube } from "../../api/fetchData";
import { useStateContext } from "../../context/ContextApi";

const ChannelProfile = ({ channelId, like }) => {
  const { likes, setLikes } = useStateContext();
  const profileChannel = async () => {
    const profile = await fetchDataYoutube(`channels?part=snippet,statistics&id=${channelId}`);
    return profile;
  };
  const { data, isError, isSuccess, error, isLoading, isFetching } = useQuery(["profileChannel", channelId], profileChannel, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && isFetching && <loading />}
      {isError && <Error error={error} />}
      {isSuccess && (
        <>
          {data?.items?.map((item, i) => (
            <Box key={i} sx={{ display: "flex", width: { xs: "auto", md: 800, lg: 1024 }, justifyContent: "space-between", flexWrap: "wrap", flexDirection: "row", height: 50, mt: "2px", mx: { xs: 2, md: "120px" }, mb: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "row", height: 50, mt: "2px" }}>
                <Link to={`/channel/${channelId}`}>
                  <CardMedia component="image" image={item?.snippet?.thumbnails?.high?.url} sx={{ width: 50, height: 50, borderRadius: "40px" }} />
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
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: { xs: 2, md: 0 }, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", cursor: "pointer", height: 40 }}>
                  {likes ? (
                    <Tooltip title="I like this" placement="top">
                      <span onClick={() => setLikes(false)} className="flex items-center space-x-2 px-4 rounded-l-full bg-white/10 hover:bg-white/20">
                        <AiOutlineLike className="text-xl" />
                        <button className="text-sm">{millify(like)}</button>
                      </span>
                    </Tooltip>
                  ) : (
                    <Tooltip title="I like this" placement="top">
                      <span onClick={() => setLikes(true)} className="flex items-center space-x-2 px-4 rounded-l-full bg-white/10 hover:bg-white/20">
                        <AiFillLike className="text-xl text-white" />
                        <button className="text-sm">{millify(like)}</button>
                      </span>
                    </Tooltip>
                  )}
                  <Tooltip title="I dislike this" placement="top">
                    <span className="flex items-center space-x-2 border-l border-white/30 bg-white/10 px-4 rounded-r-full hover:bg-white/20">
                      <AiOutlineDislike className="text-xl" />
                    </span>
                  </Tooltip>
                </Box>
                <Tooltip title="Share" placement="top">
                  <button className="py-[9px] hover:bg-white/20 space-x-2 rounded-full flex items-center px-4 bg-white/10">
                    <AiOutlineShareAlt className="text-xl" />
                    <p>Share</p>
                  </button>
                </Tooltip>
                <Tooltip title="Clip" placement="top">
                  <button className="py-[9px] hover:bg-white/20 space-x-2 rounded-full flex items-center px-4 bg-white/10">
                    <AiOutlineScissor className="text-xl " />
                    <p>Clip</p>
                  </button>
                </Tooltip>
                <Tooltip placement="top" title="Save">
                  <button className="py-[9px] hover:bg-white/20 space-x-2 rounded-full flex items-center px-4 bg-white/10">
                    <RiMenuAddFill className="text-xl " />
                    <p>Save</p>
                  </button>
                </Tooltip>
              </Box>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default ChannelProfile;
