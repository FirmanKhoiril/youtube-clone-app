import { Stack } from "@mui/material";
import React from "react";
import { useQuery, useInfiniteQuery } from "react-query";
import { Genres, Video, Loading, Error } from "../components";
import { useStateContext } from "../context/ContextApi";
import { fetchDataYoutube } from "../api/fetchData";

const Home = () => {
  const { categori } = useStateContext();

  const datasYoutube = async () => {
    const res = await fetchDataYoutube(`search?q=${categori}&order=date&part=snippet,id&regionCode=US`);
    return res;
  };

  const { data, isFetching, isLoading, isError, error } = useQuery(["categoryYoutube", categori], datasYoutube);

  const videos = data?.items;

  console.log(data);
  return (
    <Stack sx={{ flexDirection: "column", display: "flex" }}>
      <Genres />
      <Video videos={videos} />
    </Stack>
  );
};

export default Home;
