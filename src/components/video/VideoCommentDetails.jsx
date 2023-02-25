import { Box, Typography, Tooltip, CardMedia } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { MdMenuOpen } from "react-icons/md";
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { fetchDataYoutube } from "../../api/fetchData";

const VideoCommentDetails = ({ id }) => {
  const commentDetails = async () => {
    const dataComment = await fetchDataYoutube(`commentThreads?part=snippet&videoId=${id}&maxResults=100`);
    return dataComment;
  };

  const { data } = useQuery(["commentDetails", id], commentDetails, {
    refetchOnWindowFocus: false,
  });

  const totalComments = data?.pageInfo?.totalResults;
  console.log(data);

  return (
    <Box sx={{ mx: { xs: 2, md: "120px" }, my: { md: 2, xs: 9 }, display: "flex", flexDirection: "column", width: { xs: "auto", md: 800, lg: 1024 }, flexWrap: "wrap" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h6">
          {totalComments}

          {!totalComments == 0 && <span className="text-lg"> Comments</span>}
        </Typography>

        <Tooltip title="Sort Comments">
          <p className="flex items-center space-x-1">
            <MdMenuOpen className="text-2xl" />
            <span> SortBy</span>
          </p>
        </Tooltip>
      </Box>
      {data?.items?.map((item, i) => (
        <Box key={i} sx={{ display: "flex", flexWrap: "wrap", py: 2, px: 1, my: 1 }}>
          <Box sx={{ display: "flex", gap: 2, width: { md: 800, xs: "auto" } }}>
            <CardMedia
              image={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
              alt={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              sx={{ height: 40, width: 40, mr: 2 }}
              className="rounded-full"
              component="image"
            />
            <Box sx={{ display: "flex", flexDirection: "column", width: { md: 600, xs: "auto" } }}>
              <Typography variant="body1" mb="1">
                {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              </Typography>
              <Typography variant="body2">{item?.snippet?.topLevelComment?.snippet?.textOriginal}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <span className="flex items-center space-x-1 p-1 rounded-full hover:bg-white/20">
                  <AiOutlineLike className="text-xl cursor-pointer" />
                  <div className="text-sm">{item?.snippet?.topLevelComment?.snippet?.likeCount}</div>
                </span>
                <span className="flex items-center space-x-1 p-1 rounded-full hover:bg-white/20">
                  <AiOutlineDislike className="text-xl cursor-pointer" />
                </span>
                <Typography vairant="body2">reply</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VideoCommentDetails;
