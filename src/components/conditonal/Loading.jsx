import { Container } from "@mui/material";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={["#737373", "#78716c", "#737373", "#737373", "#737373"]} />
    </div>
  );
};

export default Loading;
