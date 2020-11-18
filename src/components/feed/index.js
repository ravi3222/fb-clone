import React from "react";
import MessageSender from "../messageSender";
import Post from "../post";
import StoryReel from "../storyReel";
import "./styles/feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.0-9/115991963_319563289404634_7380135227400934603_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_ohc=gzKf1Oqy2XwAX8F4Fz8&_nc_ht=scontent.fixr3-1.fna&oh=ad03f3e7f2950d47f7041235545e9ea3&oe=5FDC9681"
        message="Badrinath Dham after first Snowfall, What a beauty 🥰🥰"
        timestamp="35 m"
        username="Troll Indian Politics TIP"
        image="https://scontent.fixr3-1.fna.fbcdn.net/v/t1.0-9/125199082_407345440626418_4282605975176343097_o.jpg?_nc_cat=107&cb=846ca55b-ee17756f&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ApJu0Go6-JoAX9sGdGp&_nc_ht=scontent.fixr3-1.fna&oh=956fb1f367841e8d86fd89a9d2a35597&oe=5FDC9845"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/en/b/bb/Jesse_Livermore.gif"
        message="Jessi Livermore"
        timestamp="timestamp"
        username="RKashyap"
        image="https://i.pinimg.com/originals/56/f1/c7/56f1c7b7a4307ac90fe00cdc41949118.jpg"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/en/b/bb/Jesse_Livermore.gif"
        message="Jessi Livermore"
        timestamp="timestamp"
        username="RKashyap"
        image="https://i.pinimg.com/originals/56/f1/c7/56f1c7b7a4307ac90fe00cdc41949118.jpg"
      />
    </div>
  );
}
