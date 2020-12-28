import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
      </div>
      <div className="widgets__widgetContainer">
        <TwitterTweetEmbed tweetId={"1341579307831812096"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="LenovoJP_DO"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://qiita.com/newt0"}
          options={{ text: "#reactjs is awesome", via: "twitter-clone-react" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
