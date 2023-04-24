"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="cursor-pointer p-2"
      src="/images/logo.png"
      alt="Logo"
      width={40}
      height={40}
      sizes="35px"
      priority
    />
  );
};
export default Logo;
