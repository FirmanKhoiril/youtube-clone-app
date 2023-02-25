import { Stack } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { Genres, Video, Loading, Error } from "../components";
import { useStateContext } from "../context/ContextApi";
import { fetchDataYoutube } from "../api/fetchData";

const Home = () => {
  const { categori, results, setResults } = useStateContext();

  const datasYoutube = async () => {
    const res = await fetchDataYoutube(`search?q=${categori}&order=date&part=snippet,id&regionCode=US&maxResults=${results}`);
    return res;
  };

  const { data, isFetching, isLoading, isSuccess, error, isError } = useQuery(["categoryYoutube", categori, results], datasYoutube, {
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    staleTime: 10 * (60 * 1000),
  });

  return (
    <Stack sx={{ flexDirection: "column", display: "flex", height: "auto", overflowY: "auto" }}>
      <Genres />

      {isSuccess && (
        <>
          <Video videos={data?.items} />
        </>
      )}

      {isError && <Error error={error} />}
      {isLoading && isFetching ? <Loading /> : null}
    </Stack>
  );
};

export default Home;
