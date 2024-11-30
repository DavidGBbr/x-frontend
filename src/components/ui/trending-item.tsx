import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  count: number;
};

export const TrendingItem = ({ count, label }: Props) => {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(label)}`}
      className="group/item"
    >
      <div className="group-hover/item:underline font-bold">{label}</div>
      <div className="text-sm text-gray-400">{count} posts</div>
    </Link>
  );
};
