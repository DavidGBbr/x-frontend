import HomeHeader from "@/components/home/home-header";
import TweetPost from "@/components/tweet/tweet-post";
import React from "react";
import HomeFeed from "../../../components/home/home-feed";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </div>
  );
};

export default Home;
