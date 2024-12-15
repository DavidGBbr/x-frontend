import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import React from "react";

const Page = () => {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount}posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        ></div>
      </section>
    </div>
  );
};

export default Page;
