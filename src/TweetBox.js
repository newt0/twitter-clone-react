import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Newt999",
      username: "newt999",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.unsplash.com/photo-1525672892528-eb2eead4effc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1222911891510398978/pKo4rhvz_400x400.jpg" />

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            className="tweetBox__imageInput"
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
