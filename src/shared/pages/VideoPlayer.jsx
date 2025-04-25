import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ source }) => {
  return (
    <ReactPlayer
      url={source}
      playing
      controls
      width="100%"
      height="100%"
      style={{ objectFit: "cover" }}
    />
  );
};

export default VideoPlayer;
