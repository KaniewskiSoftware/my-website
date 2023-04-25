"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative w-[66.48px] h-[48px] sm:w-[83.1px] sm:h-[60px]"
    >
      <Image
        className="cursor-pointer p-2.5"
        src="/images/logo.png"
        alt="Logo"
        fill
        sizes="66.5px, (max-width: 1280px) 83.1px"
        priority
      />
    </Link>
  );
};
export default Logo;
