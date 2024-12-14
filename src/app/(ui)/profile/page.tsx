import { user } from "@/data/user";
import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  redirect("/" + user.slug);
  return null;
};

export default Page;
