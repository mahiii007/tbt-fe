import React from "react";
import Post from "./Post";

const arr = new Array(10).fill(".");

const Feed = () => {
  return arr.map((each, index) => {
    return <Post key={index}></Post>;
  });
};

export default Feed;
