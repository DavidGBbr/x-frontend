import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  size: number;
};
const Logo = ({ size }: Props) => {
  return (
    <Link href="/">
      <Image
        src={"/logo.png"}
        alt="Z"
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
