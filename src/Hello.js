import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Hello render");

    return () => {
      console.log("Hello unnount");
    };
  });
  return <div>Hello</div>;
};

export default Hello;
