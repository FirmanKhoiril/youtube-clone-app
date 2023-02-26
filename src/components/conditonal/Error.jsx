import React from "react";

const Error = ({ error }) => {
  return (
    <div className="h-screen w-full space-x-2 items-center flex justify-center">
      <span className="text-red-400"> {error.message}</span>
      <span> which means its too many Request to server :)</span>
    </div>
  );
};

export default Error;
