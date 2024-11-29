"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  hiddenOnSearch?: boolean;
};

const SearchInput = ({ defaultValue, hiddenOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(defaultValue ?? "");

  const handleSearchEnter = () => {
    router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    setSearchInput("");
  };

  if (hiddenOnSearch && pathname === "/search") return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(t) => setSearchInput(t)}
      onEnter={handleSearchEnter}
    />
  );
};

export default SearchInput;
