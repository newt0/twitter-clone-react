import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post
        displayName="Newt0"
        username="newt0201"
        verified={true}
        text="tweet"
        avatar="https://images.unsplash.com/photo-1567430617134-e1b881fae2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        image="https://images.unsplash.com/photo-1579006318110-42d7992b6635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
}

export default Feed;
