import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <h2>Home</h2>

      <TweetBox />

      <Post />
    </div>
  );
}

export default Feed;
