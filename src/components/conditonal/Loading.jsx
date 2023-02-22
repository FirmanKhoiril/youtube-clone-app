import { Container } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <Container className="h-screen w-full m-auto">
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["#737373", "#78716c"]} />
    </Container>
  );
};

export default Loading;
