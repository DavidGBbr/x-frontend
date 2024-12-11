import { Tweet } from "@/types/tweet";
import Link from "next/link";
import React from "react";

type Props = {
  tweet: Tweet;
};

const TweetItem = ({ tweet }: Props) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="font-bold text-lg">
            <Link href={`/${tweet.user.slug}`} />
            {tweet.user.name}
          </div>
          <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img src={tweet.image} alt="" className="w-full rounded-2xl" />
          </div>
        )}
        <div className="flex mt-6 text-gray-500"></div>
      </div>
    </div>
  );
};

export default TweetItem;
